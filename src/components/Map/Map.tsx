import { useState } from 'react'

export const Map = ({ cep = '' }: { cep: string }) => {
  const formatCep = cep.replace('-', '')

  if (formatCep.length !== 8 || formatCep === '' || !formatCep) {
    return (
      <div className="border-primary h-[150px] w-full animate-pulse rounded-lg border-2 border-dashed bg-gray-200" />
    )
  }

  return (
    <iframe
      src={`${process.env.NEXT_PUBLIC_API_GOOGLE_MAPS}?q=${cep}&z=15&output=embed`}
      width="100%"
      height="150px"
      className="border-primary rounded-lg border-2 border-dashed"
    />
  )
}

