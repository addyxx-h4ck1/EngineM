import { Request, Response } from 'express';

export const testHandler = async (req: Request, res: Response) => {
  try {
    res
      .status(200)
      .json({ status: 200, msg: 'Server is on', timestamps: new Date() });
  } catch (error) {
    res.sendStatus(500);
  }
};
