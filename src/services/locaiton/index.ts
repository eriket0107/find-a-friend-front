import { api } from "../api"

export const getLocation = async ({ params }: {
  params: {
    latitude: number
    longitude: number
  }
}) => {

  const response = await api.get(`/location?latitude=${params.latitude}&longitude=${params.longitude}`)
  console.log(response.data)
  return response.data
}
