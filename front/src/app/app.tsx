import { Routes } from './routes/routes.app.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Context } from '../entities'
import { observer } from 'mobx-react-lite'
import { FC, useContext, useEffect } from 'react'

export const App: FC = observer(() => {
  const {
    userStore: { isAuth, setAuth },
  } = useContext(Context)

  useEffect(() => {
    setAuth()
  }, [])

  return (
    <BrowserRouter>
      <div className='app'>
        <Routes isAuth={isAuth} />
      </div>
    </BrowserRouter>
  )
})
