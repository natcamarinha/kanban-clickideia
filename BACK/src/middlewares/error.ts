import { Request, Response, NextFunction } from 'express';
import { StatusCode } from '../utils/statusCode';

export default (err: any, _req: Request, res: Response, _next: NextFunction) => {
  if (err.statusCode) {
    const { statusCode, message } = err;
    return res.status(statusCode).json({ message });
  }
  return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: 'internal server error' });
};
