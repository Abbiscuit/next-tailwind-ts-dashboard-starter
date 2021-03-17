// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiResponse } from 'next';

export default (req: NextApiResponse, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' });
};
