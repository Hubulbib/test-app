import { NextFunction, Request, Response, Router } from 'express'
import { userController } from '../controllers/user.controller.js'
import { UserValidator } from '../validators/user.validator.js'

const router = Router()

router.post(
  '/',
  [UserValidator.CreateOne],
  async (req: Request, res: Response, next: NextFunction) => await userController.createOne(req, res, next),
)

export const userRouter = router
