import { AppDataSource } from '../index.js'
import { Like } from '../entities/like.entity.js'
import { User } from '../entities/user.entity.js'
import { UserRepositoryImpl } from './user.repository.impl.js'
import { LikeRepositoryImpl } from './like.repository.impl.js'

export class FactoryRepositories {
  static createLikeRepository = () => {
    return new LikeRepositoryImpl(AppDataSource.getRepository(Like))
  }

  static createUserRepository = () => {
    return new UserRepositoryImpl(AppDataSource.getRepository(User))
  }
}
