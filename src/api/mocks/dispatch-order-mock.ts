import { http, HttpResponse } from 'msw'

import { DispatchOrderProps } from '../dispatch-order'

export const dispatchOrderMock = http.patch<DispatchOrderProps, never, never>(
  '/orders/:oderId/dispatch',
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
