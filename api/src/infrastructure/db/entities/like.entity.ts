import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { User } from './user.entity.js'

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  cat_id: string

  @Column({ default: new Date().toISOString() })
  created_at: string

  @ManyToOne(() => User, (user) => user.likes)
  user: Relation<User>
}
