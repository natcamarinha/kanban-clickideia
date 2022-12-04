import { validateToken } from "../utils/jwtConfig";
import { Request, Response, NextFunction } from "express";
import { StatusCode } from "../utils/statusCode";

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) return res.status(StatusCode.UNAUTHORIZED).json({ message: 'missing token authorization' });

    const data = validateToken(authorization);

    if (!data) return res.status(StatusCode.UNAUTHORIZED).json({ message: 'token invalid' });
    next();
  } catch (error) {
    return res. status(StatusCode.UNAUTHORIZED).json({ message: 'token malformed' });
  }
};
