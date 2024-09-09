import { LikeEntity } from '../../entities/like.entity.js'
import { CreateBodyDto } from './dtos/create-body.dto.js'

export interface LikeRepository {
  getAll: (userToken: string) => Promise<LikeEntity[]>
  createOne: (userToken: string, createBody: CreateBodyDto) => Promise<LikeEntity>
  deleteOne: (catId: string) => Promise<void>
}
