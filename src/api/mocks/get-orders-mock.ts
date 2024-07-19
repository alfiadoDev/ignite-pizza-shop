import { http, HttpResponse } from 'msw'

import { GetOrdersResponseProps } from '../get-orders'

type Orders = GetOrdersResponseProps['orders']

type OrderStatus = GetOrdersResponseProps['orders'][number]['status']
const statuses: OrderStatus[] = [
  'pending',
  'processing',
  'delivering',
  'canceled',
  'delivered',
]

const orders: Orders = Array.from({ length: 60 }).map((_, i) => {
  return {
    orderId: `order-${i + 1}`,
    customerName: `customer ${i + 1}`,
    createdAt: new Date().toISOString(),
    total: 2400,
    status: statuses[i % 5],
  }
})

export const getOrdersMock = http.get<never, never, GetOrdersResponseProps>(
  '/orders',
  async ({ request }) => {
    const { searchParams } = new URL(request.url)

    const pageIndex = searchParams.get('pageIndex')
      ? Number(searchParams.get('pageIndex'))
      : 0

    const customerName = searchParams.get('customerName')
    const orderId = searchParams.get('orderId')
    const status = searchParams.get('status')

    let filteredOrders = orders

    if (customerName) {
      filteredOrders = filteredOrders.filter(
        (order) => order.customerName === customerName,
      )
    }

    if (orderId) {
      filteredOrders = filteredOrders.filter(
        (order) => order.orderId === orderId,
      )
    }

    if (status) {
      filteredOrders = filteredOrders.filter((order) => order.status === status)
    }

    const paginateOrders = filteredOrders.slice(
      pageIndex * 10,
      (pageIndex + 1) * 10,
    )

    return HttpResponse.json({
      orders: paginateOrders,
      meta: {
        pageIndex,
        perPage: 10,
        totalCount: filteredOrders.length,
      },
    })
  },
)
