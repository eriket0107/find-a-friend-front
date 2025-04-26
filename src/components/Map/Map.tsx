export const Map = ({ cep = '' }: { cep: string }) => {
  if (!cep)
    return (
      <div className="h-[150px] w-full animate-pulse rounded-lg bg-gray-200" />
    )

  return (
    <iframe
      src={`https://maps.google.com/maps?q=${cep}&z=15&output=embed`}
      width="100%"
      height="150px"
      className="border-primary rounded-lg border-2 border-dashed"
    />
  )
}

