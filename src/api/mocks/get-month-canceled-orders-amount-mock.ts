import { http, HttpResponse } from 'msw'

import { GetMonthCanceledOrdersAmountProps } from '../get-month-canceled-orders-amount'

export const getMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  // eslint-disable-next-line prettier/prettier
  GetMonthCanceledOrdersAmountProps
>('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 5,
    diffFromLastMonth: -5,
  })
})
