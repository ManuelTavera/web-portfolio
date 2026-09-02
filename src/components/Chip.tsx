type ChipProps = {
  name: string
}

function Chip({ name }: ChipProps) {
  return (
    <span className="border border-hairline rounded-pill px-4 py-1.75 text-chip text-ink">
      {name}
    </span>
  )
}

export default Chip
