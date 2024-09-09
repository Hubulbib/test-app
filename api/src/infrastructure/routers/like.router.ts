import { NextFunction, Request, Response, Router } from 'express'
import { likeController } from '../controllers/like.controller.js'
import { AuthMiddleware } from '../middlewares/auth.middleware.js'
import { LikeValidator } from '../validators/like.validator.js'

const router = Router()

router.get(
  '/',
  [AuthMiddleware],
  async (req: Request, res: Response, next: NextFunction) => await likeController.getAll(req, res, next),
)

router.post(
  '/',
  [AuthMiddleware, LikeValidator.CreateOne],
  async (req: Request, res: Response, next: NextFunction) => await likeController.createOne(req, res, next),
)

router.delete(
  '/:cat_id',
  [AuthMiddleware, LikeValidator.DeleteOne],
  async (req: Request, res: Response, next: NextFunction) => await likeController.deleteOne(req, res, next),
)

export const likeRouter = router
