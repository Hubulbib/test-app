import { NextFunction, Request, Response } from 'express'
import { body } from 'express-validator'

export class UserValidator {
  static CreateOne(req: Request, res: Response, next: NextFunction) {
    body('login').exists().isString()
    body('password').exists().isString().isLength({ min: 6 })
    next()
  }
}
