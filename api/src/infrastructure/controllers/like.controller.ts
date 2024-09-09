import { NextFunction, Request, Response } from 'express'
import { AppDataSource } from '../db/index.js'
import { LikeService } from '../../core/services/like.service.js'
import { LikeRepositoryImpl } from '../db/repositories/like.repository.impl.js'
import { Like } from '../db/entities/like.entity.js'

export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers['x-auth-token']
      const likeData = await this.likeService.getAll(token as string)
      res.json({ data: likeData })
    } catch (err) {
      next(err)
    }
  }

  createOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers['x-auth-token']
      const likeBody = req.body
      const likeData = await this.likeService.createOne(token as string, likeBody)
      res.status(201).json({ data: likeData })
    } catch (err) {
      next(err)
    }
  }

  deleteOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { cat_id } = req.params
      await this.likeService.deleteOne(cat_id)
      res.end()
    } catch (err) {
      next(err)
    }
  }
}

export const likeController = new LikeController(
  new LikeService(new LikeRepositoryImpl(AppDataSource.getRepository(Like))),
)
