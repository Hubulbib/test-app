import { FC } from 'react'
import { Navigate, Route, Routes as RouteList } from 'react-router-dom'
import { AuthPage, CatsPage, FavoritesPage } from '../../pages'
import { NavBar } from '../../widgets'

interface IRoutesProps {
  isAuth: boolean
}

export const Routes: FC<IRoutesProps> = ({ isAuth = false }: IRoutesProps) => {
  if (!isAuth) {
    return (
      <RouteList>
        <Route path={'/auth'} element={<AuthPage />} />
        <Route path={'*'} element={<Navigate to={'/auth'} />} />
      </RouteList>
    )
  }

  return (
    <>
      <NavBar />
      <RouteList>
        <Route path={'/cats'} element={<CatsPage />} />
        <Route path={'/favorites'} element={<FavoritesPage />} />
        <Route path={'*'} element={<Navigate to={'/cats'} />} />
      </RouteList>
    </>
  )
}
