// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: Array<Object>
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ data: [
    {
      id: 1,
      date: '2023-1-1',
      amount: 23.22,
      retailer: 'aaa'
    },
    {
      id: 2,
      date: '2023-3-3',
      amount: 64.24,
      retailer: 'bbb'
    },
    {
      id: 3,
      date: '2023-3-22',
      amount: 12.23,
      retailer: 'ccc'
    }
  ] })
}
