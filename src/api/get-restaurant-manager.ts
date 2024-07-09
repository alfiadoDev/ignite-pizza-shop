import { api } from '@/lib/axios'

interface GetRestaurantManagerResponseProps {
  name: string
  id: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getRestaurantManager() {
  const response = await api.get<GetRestaurantManagerResponseProps>(
    '/managed-restaurant',
  )

  return response.data
}
