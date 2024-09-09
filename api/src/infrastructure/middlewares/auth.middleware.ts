import { NextFunction, Request, Response } from 'express'

export const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers['x-auth-token']) {
    throw Error('Нет авторизации')
  }
  next()
}
