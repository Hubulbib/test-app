import { FC, useContext, useState } from 'react'
import { HeartImageComponent } from '../../../shared/assets'
import { Context } from '../../../entities'
import './cat-card.style.css'
import { observer } from 'mobx-react-lite'

interface ICatCardProps {
  url: string
  catId: string
  isLike?: boolean
}

export const CatCard: FC<ICatCardProps> = observer(({ url, catId, isLike = false }: ICatCardProps) => {
  const {
    catsStore: { addToFavorites, removeToFavorites },
  } = useContext(Context)

  const [isRed, setIsRed] = useState<boolean>(isLike || false)

  const onClickCard = async () => {
    if (isRed) {
      await removeToFavorites(catId)
      setIsRed((prev) => !prev)
    } else {
      await addToFavorites(catId)
      setIsRed((prev) => !prev)
    }
  }

  return (
    <div
      key={catId}
      className={'cat-card'}
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <HeartImageComponent fill={isRed ? 'red' : 'none'} onClick={onClickCard} alt={'heart'} />
    </div>
  )
})
