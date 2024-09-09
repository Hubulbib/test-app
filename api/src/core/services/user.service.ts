import { UserEntity } from '../entities/user.entity.js'
import { UserRepository } from '../repositories/user/user.repository.js'
import { CreateBodyDto } from '../repositories/user/dtos/create-body.dto.js'

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  createOne = async (createBody: CreateBodyDto): Promise<UserEntity> => {
    return await this.userRepository.createOne(createBody)
  }
}
