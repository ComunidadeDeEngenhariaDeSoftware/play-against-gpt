import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ nextMove: number }>
) {
  res.status(201).json({ nextMove: 9 })
}
