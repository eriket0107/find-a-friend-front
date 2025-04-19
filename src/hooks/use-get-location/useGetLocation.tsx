'use client'
import { getLocation } from '@/services/locaiton'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

export const useGetLocation = () => {
  const [coords, setCoords] = useState<{
    latitude: number
    longitude: number
  }>({
    latitude: 0,
    longitude: 0,
  })

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    })
  }, [])

  const { data, error, isLoading } = useSWR(
    {
      url: '/location',
      params: {
        latitude: coords.latitude,
        longitude: coords.longitude,
      },
    },
    getLocation
  )

  console.log(data)

  return {
    location: data,
    error,
    isLoading,
  }
}
