import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getMonthOrdersAmount } from '@/api/get-month-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthOrdersAmountCard() {
  const { data: monthOrderAmount } = useQuery({
    queryKey: ['metrics', 'month-orders-amount'],
    queryFn: getMonthOrdersAmount,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Pedidos no mes
        </CardTitle>
        <Utensils className="h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthOrderAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthOrderAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthOrderAmount.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthOrderAmount.diffFromLastMonth}%
                  </span>{' '}
                  em relacao ao mes passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthOrderAmount.diffFromLastMonth}%
                  </span>{' '}
                  em relacao ao mes passado
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
