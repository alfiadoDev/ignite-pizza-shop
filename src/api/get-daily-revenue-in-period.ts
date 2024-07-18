import { api } from '@/lib/axios'

interface GetDailyRevenueInPeriodQueryProps {
  from?: Date;
  to?: Date;
}

export type GetDailyRevenueInPeriodProps = {
  date: string,
  receipt: number,
}[]

export async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodQueryProps) {
  const response = await api.get<GetDailyRevenueInPeriodProps>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}
