import { makeAutoObservable } from 'mobx'
import { UserApi } from '../../shared/api'

export class UserStore {
  isAuth: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  setAuth = () => {
    this.isAuth = !!localStorage.getItem('authToken')
  }

  createOne = async (login: string, password: string): Promise<void> => {
    const data = await UserApi.createOne(login, password)
    localStorage.setItem('authToken', data.token)
    this.setAuth()
  }
}
