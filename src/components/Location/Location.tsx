'use client'
import { useGetLocation } from '@/hooks/use-get-location'
import { LocationSkeleton } from './LocationSkeleton'
import { MapPin } from 'lucide-react'

export const Location = () => {
  const { location, isLoading } = useGetLocation()
  if (isLoading) return <LocationSkeleton />
  return (
    <span className="flex items-center gap-2 underline">
      <MapPin className="h-4 w-4" />
      <p className="text-sm font-medium">{location?.city}</p>
    </span>
  )
}
