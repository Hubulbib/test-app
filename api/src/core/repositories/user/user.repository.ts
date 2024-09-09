import { UserEntity } from '../../entities/user.entity.js'
import { CreateBodyDto } from './dtos/create-body.dto.js'

export interface UserRepository {
  getOneByToken: (token: string) => Promise<UserEntity>
  createOne: (createBody: CreateBodyDto) => Promise<UserEntity>
}
