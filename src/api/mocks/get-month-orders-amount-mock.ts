import { http, HttpResponse } from 'msw'

import { GetMonthOrdersAmountProps } from '../get-month-orders-amount'

export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  // eslint-disable-next-line prettier/prettier
  GetMonthOrdersAmountProps
>('/metrics/month-orders-amount', () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: 7,
  })
})
