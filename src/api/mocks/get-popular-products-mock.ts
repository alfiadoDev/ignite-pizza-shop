import { http, HttpResponse } from 'msw'

import { GetPopularProductsProps } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  // eslint-disable-next-line prettier/prettier
  GetPopularProductsProps
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { amount: 7, product: 'pizza canebreza' },
    { amount: 8, product: 'pizza canebreza' },
    { amount: 10, product: 'pizza canebreza' },
    { amount: 5, product: 'pizza canebreza' },
    { amount: 6, product: 'pizza canebreza' },
    { amount: 12, product: 'pizza canebreza' },
  ])
})
