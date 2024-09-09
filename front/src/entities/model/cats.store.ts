import { makeAutoObservable } from 'mobx'
import { CatModel } from './cat.model.ts'
import { CatsApi } from '../../shared/api'

interface IFavorite {
  id: string
  url: string
}

export class CatsStore {
  cats: CatModel[] = []
  favorites: IFavorite[] = []
  constructor() {
    makeAutoObservable(this)
  }

  private setCats = (cats: CatModel[]) => {
    this.cats = [...this.cats, ...cats]
  }

  private setFavorites = (favorites: IFavorite[]) => {
    this.favorites = favorites
  }

  getAll = async (limit: number) => {
    try {
      // @ts-ignore
      this.setCats((await CatsApi.getAll(limit)).map((el) => ({ catId: el.id, url: el.url })))
    } catch (err) {
      throw err
    }
  }

  getFavorites = async () => {
    try {
      this.setFavorites(await CatsApi.getFavorites(localStorage.getItem('authToken') as string))
    } catch (err) {
      throw err
    }
  }

  addToFavorites = async (catId: string) => {
    try {
      await CatsApi.addToFavorites(localStorage.getItem('authToken') as string, catId)
    } catch (err) {
      throw err
    }
  }

  removeToFavorites = async (catId: string) => {
    try {
      await CatsApi.removeFromFavorites(localStorage.getItem('authToken') as string, catId)
    } catch (err) {
      throw err
    }
  }
}
