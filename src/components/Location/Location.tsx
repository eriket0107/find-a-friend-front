'use client'
import { useGetLocation } from '@/hooks/use-get-location'
import { LocationSkeleton } from './LocationSkeleton'
import { MapPin, X } from 'lucide-react'
import Link from 'next/link'

export const Location = () => {
  const { location, isLoading, permissionStatus } = useGetLocation()
  console.log(location)
  if (isLoading) return <LocationSkeleton />

  if (permissionStatus === 'denied')
    return (
      <p className="flex items-center gap-2 text-sm font-medium underline hover:opacity-80">
        <X className="h-4 w-4" />
        <p>Permita localização</p>
      </p>
    )

  return (
    <Link
      href={location?.mapLink}
      target="_blank"
      className="flex items-center gap-2 text-sm font-medium underline hover:opacity-80"
    >
      <MapPin className="h-4 w-4" />
      <p>
        {location?.city}, {location?.state}
      </p>
    </Link>
  )
}
