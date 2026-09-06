// Rasterizes public/favicon-rule.svg into the PNG sizes that iOS/Android need.
// The mark is only a background plus four square-capped strokes, so it is
// cheaper to evaluate the geometry directly than to pull in a real renderer.
import { deflateSync } from 'node:zlib'
import { writeFileSync } from 'node:fs'

const BG = [0x1d, 0x1d, 0x1f]
const WHITE = [0xff, 0xff, 0xff]
const BLUE = [0x00, 0x66, 0xcc]

// All coordinates live in the SVG's 32x32 viewBox. The "MT" group carries a
// translate(0 -2), which is baked into the points below; the blue rule sits
// outside that group and keeps its original y.
const MT = [
  [6, 20.5],
  [6, 8.5],
  [10.75, 14.5],
  [15.5, 8.5],
  [15.5, 20.5],
]

// Each colour is drawn as the union of its parts and composited once. Blending
// the parts one at a time instead leaves seams everywhere two of them overlap.
const white = { color: WHITE, parts: [] }
const blue = { color: BLUE, parts: [] }

// A square cap belongs only on a free end of the path. Extending an interior
// end too makes the diagonals poke past the join as little ears, so those ends
// are butt-cut and a disc at the vertex fills the wedge between them. That
// trades the miter tip for a round join, which is invisible at icon sizes.
for (let i = 0; i < MT.length - 1; i++) {
  white.parts.push({
    a: MT[i],
    b: MT[i + 1],
    width: 3,
    capA: i === 0,
    capB: i === MT.length - 2,
  })
}
for (let i = 1; i < MT.length - 1; i++) {
  white.parts.push({ center: MT[i], radius: 1.5 })
}
white.parts.push({
  a: [18.5, 8.5],
  b: [26, 8.5],
  width: 3,
  capA: true,
  capB: true,
})
white.parts.push({
  a: [22.25, 8.5],
  b: [22.25, 20.5],
  width: 3,
  capA: true,
  capB: true,
})
blue.parts.push({ a: [6, 25], b: [26, 25], width: 2, capA: true, capB: true })

const layers = [white, blue]

function covers(part, x, y) {
  if (part.center) {
    return Math.hypot(x - part.center[0], y - part.center[1]) <= part.radius
  }
  // A capped end extends the segment by half the stroke width; a butt end stops
  // flat at the vertex.
  const { a, b, width, capA, capB } = part
  const hw = width / 2
  const dx = b[0] - a[0]
  const dy = b[1] - a[1]
  const len = Math.hypot(dx, dy)
  const ux = dx / len
  const uy = dy / len
  const px = x - a[0]
  const py = y - a[1]
  const along = px * ux + py * uy
  const perp = Math.abs(-px * uy + py * ux)
  if (perp > hw) return false
  return along >= (capA ? -hw : 0) && along <= len + (capB ? hw : 0)
}

// Full-bleed square, no rounded corners: iOS and Android apply their own mask,
// and pre-rounding it would show as a dark halo inside theirs.
const SAMPLES = 4

function render(size) {
  const scale = size / 32
  const raw = Buffer.alloc(size * (size * 4 + 1))
  let p = 0

  for (let py = 0; py < size; py++) {
    raw[p++] = 0 // PNG filter type: none
    for (let px = 0; px < size; px++) {
      let r = BG[0]
      let g = BG[1]
      let b = BG[2]

      for (const layer of layers) {
        let hits = 0
        for (let sy = 0; sy < SAMPLES; sy++) {
          for (let sx = 0; sx < SAMPLES; sx++) {
            const x = (px + (sx + 0.5) / SAMPLES) / scale
            const y = (py + (sy + 0.5) / SAMPLES) / scale
            if (layer.parts.some((part) => covers(part, x, y))) hits++
          }
        }
        if (hits === 0) continue
        const alpha = hits / (SAMPLES * SAMPLES)
        r = Math.round(r + (layer.color[0] - r) * alpha)
        g = Math.round(g + (layer.color[1] - g) * alpha)
        b = Math.round(b + (layer.color[2] - b) * alpha)
      }

      raw[p++] = r
      raw[p++] = g
      raw[p++] = b
      raw[p++] = 0xff
    }
  }

  return raw
}

const CRC_TABLE = Array.from({ length: 256 }, (_, n) => {
  let c = n
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  return c >>> 0
})

function crc32(buf) {
  let c = 0xffffffff
  for (const byte of buf) c = CRC_TABLE[(c ^ byte) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length)
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(body))
  return Buffer.concat([len, body, crc])
}

function png(size) {
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(size, 0)
  ihdr.writeUInt32BE(size, 4)
  ihdr[8] = 8 // bit depth
  ihdr[9] = 6 // colour type: RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(render(size), { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

for (const [name, size] of [
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
]) {
  const out = `public/${name}`
  writeFileSync(out, png(size))
  console.log(`wrote ${out} (${size}x${size})`)
}
