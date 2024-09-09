import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { Like } from './like.entity.js'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  login: string

  @Column()
  password: string

  @Column()
  auth_token: string

  @OneToMany(() => Like, (like) => like.user)
  likes: Relation<Like[]>
}
