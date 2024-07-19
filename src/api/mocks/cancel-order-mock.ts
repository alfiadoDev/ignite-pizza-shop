import { http, HttpResponse } from 'msw'

import { CancelOrderProps } from '../cancel-order'

export const cancelOrderMock = http.patch<CancelOrderProps, never, never>(
  '/orders/:oderId/cancel',
  ({ params }) => {
    if (params.orderId === 'error-order-id') {
      return new HttpResponse(null, {
        status: 400,
      })
    }

    return new HttpResponse(null, {
      status: 200,
    })
  },
)
