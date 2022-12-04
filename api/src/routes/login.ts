import { Router } from "express";
import LoginService from "../services/LoginService";
import LoginController from "../controllers/LoginController";

const loginService = new LoginService();
const loginController = new LoginController(loginService);
const loginRouter = Router();

loginRouter.post('/', loginController.loginController.bind(loginController));

export default loginRouter;
