import { FC, useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { CatCard } from '../../../widgets'
import { Context } from '../../../entities'
import './cats.style.css'

export const CatsPage: FC = observer(() => {
  const {
    catsStore: { getAll, cats },
  } = useContext(Context)

  useEffect(() => {
    getAll(10)
  }, [])

  const onClickLoadButton = () => {
    getAll(10)
  }

  return (
    <div className='cats-page'>
      <div className='cats-page__list'>
        {cats?.map((el) => <CatCard catId={el.catId} key={el.catId} url={el.url} />)}
      </div>
      <div className='cats-page__load'>
        <h1 onClick={onClickLoadButton}>... загружаем еще котиков ...</h1>
      </div>
    </div>
  )
})
