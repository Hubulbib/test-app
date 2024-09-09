import { DataSource } from 'typeorm'
import { User } from './entities/user.entity.js'
import { Like } from './entities/like.entity.js'
import 'dotenv/config.js'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Like],
  synchronize: true,
})
