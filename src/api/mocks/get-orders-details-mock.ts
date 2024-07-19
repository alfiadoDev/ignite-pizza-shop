import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsProps,
  GetOrderDetailsResponseProps,
} from '../get-order-details'

export const getOrderDetailMock = http.get<
  GetOrderDetailsProps,
  never,
  // eslint-disable-next-line prettier/prettier
  GetOrderDetailsResponseProps
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '00000000',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'pizza pepperoni' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 2000,
        product: { name: 'pizza margarita' },
        quantity: 2,
      },
    ],
  })
})
