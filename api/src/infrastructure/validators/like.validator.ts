import { NextFunction, Request, Response } from 'express'
import { body, param } from 'express-validator'

export class LikeValidator {
  static CreateOne(req: Request, res: Response, next: NextFunction) {
    body('cat_id').exists().isString()
    body('created_at').optional().isISO8601()
    next()
  }

  static DeleteOne(req: Request, res: Response, next: NextFunction) {
    param('cat_id').exists().isString()
    next()
  }
}
