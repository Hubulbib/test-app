import axios from 'axios'

interface IUser {
  login: string
  password: string
}

export class UserApi {
  static createOne = async (login: string, password: string): Promise<{ user: IUser; token: string }> => {
    const response = await axios.post(`/api/user`, { login, password })
    const token = await response.headers['x-auth-token']
    return { user: response.data, token }
  }
}
