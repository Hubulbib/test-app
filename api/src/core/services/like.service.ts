import { LikeEntity } from '../entities/like.entity.js'
import { LikeRepository } from '../repositories/like/like.repository.js'
import { CreateBodyDto } from '../repositories/like/dtos/create-body.dto.js'

export class LikeService {
  constructor(private readonly likeRepository: LikeRepository) {}

  getAll = async (authToken: string): Promise<LikeEntity[]> => {
    return await this.likeRepository.getAll(authToken)
  }

  createOne = async (authToken: string, createBody: CreateBodyDto): Promise<LikeEntity> => {
    return await this.likeRepository.createOne(authToken, createBody)
  }

  deleteOne = async (catId: string): Promise<void> => {
    return await this.likeRepository.deleteOne(catId)
  }
}
