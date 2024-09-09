import { FC } from 'react'
import { NavBarItem } from '../../../shared/ui'
import './nav-bar.style.css'

export const NavBar: FC = () => {
  return (
    <div className='nav-bar'>
      <NavBarItem to={'/cats'} text={'Все котики'} />
      <NavBarItem to={'/favorites'} text={'Любимые котики'} />
    </div>
  )
}
