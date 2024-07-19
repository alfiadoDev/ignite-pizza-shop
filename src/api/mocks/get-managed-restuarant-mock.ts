import { http, HttpResponse } from 'msw'

import { GetRestaurantManagerResponseProps } from '../get-restaurant-manager'

export const getRestaurantManagerMock = http.get<
  never,
  never,
  // eslint-disable-next-line prettier/prettier
  GetRestaurantManagerResponseProps
>('/managed-restaurant', () => {
  return HttpResponse.json({
    name: 'Pizza Shop',
    id: 'R1',
    createdAt: new Date('01/01/2024'),
    updatedAt: null,
    description: 'descriptiuommmmmmm ahhgahgghsghagsha haghghaghsghhag',
    managerId: '1',
  })
})
