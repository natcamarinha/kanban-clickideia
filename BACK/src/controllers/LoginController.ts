import { Request, Response, NextFunction } from 'express';
import LoginService from '../services/LoginService';
import { StatusCode } from '../utils/statusCode';

export default class LoginController {
  constructor(private loginService: LoginService) {}

  async loginController(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await this.loginService.verifyUser(req.body);
      return res.status(StatusCode.OK).json({ token });
    } catch (error) {
      next(error);
    }
  }
};
