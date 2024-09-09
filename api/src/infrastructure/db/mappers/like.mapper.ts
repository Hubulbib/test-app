import { Like } from '../entities/like.entity.js'
import { LikeEntity } from '../../../core/entities/like.entity.js'

export class LikeMapper {
  static toDomain(entity: Like): LikeEntity {
    return new LikeEntity(entity.cat_id, entity.created_at)
  }
}
