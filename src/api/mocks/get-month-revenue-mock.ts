import { http, HttpResponse } from 'msw'

import { GetMonthRevenueProps } from '../get-month-revenue'

export const getMonthRevenueMock = http.get<
  never,
  never,
  // eslint-disable-next-line prettier/prettier
  GetMonthRevenueProps
>('/metrics/month-receipt', () => {
  return HttpResponse.json({
    receipt: 30000,
    diffFromLastMonth: 10,
  })
})
