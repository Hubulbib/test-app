import { createContext } from 'react'
import { CatsStore } from '../model/cats.store.ts'
import { UserStore } from '../model/user.store.ts'

export const Context = createContext<{ catsStore: CatsStore; userStore: UserStore }>({
  catsStore: new CatsStore(),
  userStore: new UserStore(),
})
