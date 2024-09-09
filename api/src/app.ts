import express from 'express'
import cors from 'cors'
import { AppDataSource } from './infrastructure/db/index.js'
import { likeRouter } from './infrastructure/routers/like.router.js'
import { userRouter } from './infrastructure/routers/user.router.js'
import 'dotenv/config.js'

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN_URL,
    exposedHeaders: 'X-Auth-Token',
  }),
)
app.use('/api/user', userRouter)
app.use('/api/likes', likeRouter)

const bootstrap = async () => {
  await AppDataSource.initialize()
  await app.listen(PORT, () => console.log(`Server has been started on ${PORT}`))
}

bootstrap()
