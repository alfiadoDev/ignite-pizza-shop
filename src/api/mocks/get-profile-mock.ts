import { http, HttpResponse } from 'msw'

import { GetProfileResponseProps } from '../get-profile'

export const getProfileMock = http.get<
  never,
  never,
  // eslint-disable-next-line prettier/prettier
  GetProfileResponseProps
>('/me', () => {
  return HttpResponse.json({
    name: 'John doe',
    id: '1',
    email: 'johndoe@example.com',
    phone: null,
    role: 'manager',
    createdAt: new Date('01/01/2024'),
    updatedAt: null,
  })
})
