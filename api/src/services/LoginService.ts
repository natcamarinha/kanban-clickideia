import { generateToken } from "../utils/jwtConfig";
import { StatusCode } from "../utils/statusCode";
import { errorHandler } from "../utils/errorHandler";

const login = process.env.LOGIN;
const senha = process.env.SENHA;

export default class LoginService {
  verifyUser(body: any) {
    if (body.login === login && body.senha === senha) {
      return generateToken({body});
    } else {
      throw errorHandler(StatusCode.UNAUTHORIZED, 'usuário ou senha inválido');
    }
  }
}