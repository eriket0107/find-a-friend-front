'use client'
import { getLocation } from '@/services/locaiton'
import useSWR, { SWRConfiguration } from 'swr'

type PermissionState = 'granted' | 'denied' | 'prompt'
export const useLocation = ({
  permissionStatus,
  coords,
  options,
}: {
  permissionStatus: PermissionState
  coords: { latitude: number; longitude: number }
  options: SWRConfiguration
}) => {
  const { data, error, isLoading } = useSWR(
    permissionStatus === 'granted'
      ? {
          url: '/location',
          params: {
            latitude: coords.latitude,
            longitude: coords.longitude,
          },
        }
      : null,
    getLocation,
    options
  )

  return { location: data, error, isLoading }
}
