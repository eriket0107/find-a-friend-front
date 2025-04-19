'use client'
import { useLocation } from '@/services/location/use-location'
import { useEffect, useState } from 'react'

export const useGetLocation = () => {
  const [coords, setCoords] = useState<{
    latitude: number
    longitude: number
  }>({
    latitude: 0,
    longitude: 0,
  })
  const [permissionStatus, setPermissionStatus] =
    useState<PermissionState>('prompt')
  const [locationError, setLocationError] = useState<string>('')

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser')
      return
    }
    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
      setPermissionStatus(result.state)

      result.onchange = () => {
        setPermissionStatus(result.state)
      }
    })

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
        setLocationError('')
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError(
              'Please enable location access to use this feature'
            )
            break
          case error.POSITION_UNAVAILABLE:
            setLocationError('Location information is unavailable')
            break
          case error.TIMEOUT:
            setLocationError('Location request timed out')
            break
          default:
            setLocationError('An unknown error occurred')
        }
      }
    )
  }, [])

  const { location, error, isLoading } = useLocation({
    permissionStatus,
    coords,
    options: {
      revalidateOnFocus: false,
    },
  })

  const mapLink = `${process.env.NEXT_PUBLIC_API_GOOGLE_MAPS}@${coords.latitude},${coords.longitude}`

  return {
    location: { ...location, mapLink },
    error: locationError || error,
    isLoading,
    permissionStatus,
  }
}

