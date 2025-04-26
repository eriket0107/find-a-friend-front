'use client'
import { useGetLocation } from '@/hooks/useGetLocation'
import { LocationSkeleton } from './LocationSkeleton'
import { Info, MapPin, X } from 'lucide-react'
import Link from 'next/link'

export const Location = () => {
  const { location, isLoading, permissionStatus, error } = useGetLocation()
  if (isLoading || !location.city || !location.state)
    return <LocationSkeleton />

  if (permissionStatus === 'denied')
    return (
      <p className="flex items-center gap-2 text-sm font-medium hover:opacity-80">
        <Info className="h-4 w-4" />
        <p>Habilite a localização</p>
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

