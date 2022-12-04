import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const API_SECRET: Secret = process.env.JWT_SECRET || '123456';

const JWT_CONFIG: SignOptions = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const generateToken = (data: object) => jwt.sign({ data }, API_SECRET, JWT_CONFIG);

const validateToken = (token: string) => {
  try {
    return jwt.verify(token, API_SECRET);
  } catch (error) {
    return error;
  }
};

export {
  generateToken,
  validateToken
}
