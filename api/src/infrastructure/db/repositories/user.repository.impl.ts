import { hash } from 'bcrypt'
import { Repository } from 'typeorm'
import { User } from '../entities/user.entity.js'
import { UserMapper } from '../mappers/user.mapper.js'
import { UserEntity } from '../../../core/entities/user.entity.js'
import { UserRepository } from '../../../core/repositories/user/user.repository.js'
import { CreateBodyDto } from '../../../core/repositories/user/dtos/create-body.dto.js'

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userRepository: Repository<User>) {}

  getOneByToken = async (token: string): Promise<UserEntity> => {
    return UserMapper.toDomain(await this.userRepository.findOneBy({ auth_token: token }))
  }

  createOne = async (createBody: CreateBodyDto): Promise<UserEntity> => {
    if (await this.userRepository.findOneBy({ login: createBody.login })) {
      throw Error('Такой юзер уже существует')
    }
    const hashedPassword = await this.hashData(createBody.password)
    const user = await this.userRepository.create({
      ...createBody,
      password: hashedPassword,
      auth_token: await this.hashData(createBody.login),
    })
    await this.userRepository.save(user)

    return UserMapper.toDomain(user)
  }

  private hashData = async (data: string) => {
    return await hash(data, 12)
  }
}
