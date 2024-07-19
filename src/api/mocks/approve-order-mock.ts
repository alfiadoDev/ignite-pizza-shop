import { http, HttpResponse } from 'msw'

import { ApproveOrderProps } from '../approve-order'

export const approveOrderMock = http.patch<ApproveOrderProps, never, never>(
  '/orders/:oderId/approve',
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
