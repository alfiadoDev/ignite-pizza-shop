import { http, HttpResponse } from 'msw'

import { GetDayOrdersAmountProps } from '../get-day-orders-amount'

export const getDayOrdersAmountMock = http.get<
  never,
  never,
  // eslint-disable-next-line prettier/prettier
  GetDayOrdersAmountProps
>('/metrics/day-orders-amount', () => {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: -5,
  })
})
