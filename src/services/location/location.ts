import { api } from "../api"

const getLocation = async ({ params }: {
  params: {
    latitude: number
    longitude: number
  }
}) => {
  try {
    const response = await api.get(`/location?latitude=${params.latitude}&longitude=${params.longitude}`)
    return response.data
  } catch (error) {
    console.error(error)
    console.log(error)
    return error
  }
}

export const locationService = {
  getLocation,
}
