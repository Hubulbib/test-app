import { User } from '../entities/user.entity.js'
import { UserEntity } from '../../../core/entities/user.entity.js'

export class UserMapper {
  static toDomain(entity: User): UserEntity {
    return new UserEntity(entity.id, entity.login, entity.password, entity.auth_token)
  }
}
