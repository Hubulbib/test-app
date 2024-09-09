import { Repository } from 'typeorm'
import { Like } from '../entities/like.entity.js'
import { LikeEntity } from '../../../core/entities/like.entity.js'
import { LikeRepository } from '../../../core/repositories/like/like.repository.js'
import { CreateBodyDto } from '../../../core/repositories/like/dtos/create-body.dto.js'
import { LikeMapper } from '../mappers/like.mapper.js'
import { FactoryRepositories } from './factory.index.js'

export class LikeRepositoryImpl implements LikeRepository {
  constructor(private readonly likeRepository: Repository<Like>) {}

  getAll = async (authToken: string): Promise<LikeEntity[]> => {
    const { userId } = await FactoryRepositories.createUserRepository().getOneByToken(authToken)
    return (await this.likeRepository.findBy({ user: { id: userId } })).map((el) => LikeMapper.toDomain(el))
  }

  createOne = async (authToken: string, createBody: CreateBodyDto): Promise<LikeEntity> => {
    const { userId } = await FactoryRepositories.createUserRepository().getOneByToken(authToken)
    const like = await this.likeRepository.create({
      cat_id: createBody.cat_id,
      created_at: createBody.created_at || new Date().toISOString(),
      user: { id: userId },
    })
    await this.likeRepository.save(like)

    return LikeMapper.toDomain(like)
  }

  deleteOne = async (catId: string): Promise<void> => {
    await this.likeRepository.delete({ cat_id: catId })
  }
}
