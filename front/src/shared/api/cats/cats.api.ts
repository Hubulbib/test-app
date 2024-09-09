import axios from 'axios'
import { CatModel } from '../../../entities'

interface ICat {
  cat_id: string
  created_at: string
}

export class CatsApi {
  static getAll = async (limit: number): Promise<CatModel[]> => {
    // @ts-ignore
    const inst = await axios.request({
      method: 'GET',
      url: `https://api.thecatapi.com/v1/images/search?limit=${limit}`,
      headers: { 'x-api-key': 'live_RNzz10waIrFA0cJIxYKJ7XxnEC8PXV8HJSq7XJvEM6a0RwetMTeVIaIVJsibvhFK' },
    })

    return inst.data
  }

  static getFavorites = async (token: string): Promise<{ id: string; url: string }[]> => {
    // @ts-ignore
    const inst = await axios.request({
      method: 'GET',
      url: `/api/likes`,
      headers: { 'X-Auth-Token': token },
    })

    const cats: ICat[] = inst.data.data
    return await Promise.all(
      cats.map(async (el) => (await axios.get(`https://api.thecatapi.com/v1/images/${el.cat_id}`)).data),
    )
  }

  static addToFavorites = async (token: string, catId: string): Promise<ICat> => {
    //@ts-ignore
    const inst = await axios.request({
      method: 'POST',
      data: { cat_id: catId },
      url: `/api/likes`,
      headers: { 'X-Auth-Token': token },
    })
    return inst.data
  }

  static removeFromFavorites = async (token: string, catId: string): Promise<void> => {
    // @ts-ignore
    await axios.request({
      method: 'DELETE',
      url: `/api/likes/${catId}`,
      headers: { 'X-Auth-Token': token },
    })
  }
}
