import { FC, useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { CatCard } from '../../../widgets'
import { Context } from '../../../entities'

export const FavoritesPage: FC = observer(() => {
  const {
    catsStore: { favorites, getFavorites },
  } = useContext(Context)

  useEffect(() => {
    getFavorites()
  }, [])

  return (
    <div className='cats-page'>
      <div className='cats-page__list'>
        {favorites.map((el) => (
          <CatCard catId={el.id} key={el.id} url={el.url} isLike={true} />
        ))}
      </div>
    </div>
  )
})
