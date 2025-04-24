'use client'
import useSWR, { SWRConfiguration } from 'swr'
import { locationService } from './location'

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
  const getLocationKey = () => {
    if (permissionStatus === 'granted' && coords.latitude && coords.longitude) {
      return {
        url: `/location-${coords.latitude}-${coords.longitude}-${permissionStatus}`,
        params: {
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
      }
    }
    return null
  }

  const { data, error, isLoading } = useSWR(
    getLocationKey(),
    locationService.getLocation,
    options
  )

  return { location: data, error, isLoading }
}

