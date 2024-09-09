import { NextFunction, Request, Response } from 'express'
import { AppDataSource } from '../db/index.js'
import { User } from '../db/entities/user.entity.js'
import { UserService } from '../../core/services/user.service.js'
import { UserRepositoryImpl } from '../db/repositories/user.repository.impl.js'

export class UserController {
  constructor(private readonly userService: UserService) {}

  createOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userBody = req.body
      const { authToken, ...userData } = await this.userService.createOne(userBody)
      res.header('X-Auth-Token', authToken)
      res.status(201).json({ data: userData })
    } catch (err) {
      next(err)
    }
  }
}

export const userController = new UserController(
  new UserService(new UserRepositoryImpl(AppDataSource.getRepository(User))),
)
