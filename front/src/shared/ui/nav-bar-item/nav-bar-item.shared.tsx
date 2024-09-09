import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import './nav-bar-item.style.css'

interface INavBarItemProps {
  to: string
  text: string
}

export const NavBarItem: FC<INavBarItemProps> = ({ to, text }: INavBarItemProps) => {
  return (
    <NavLink
      style={({ isActive }) => {
        if (isActive)
          return {
            color: 'white',
            backgroundColor: '#1E88E5',
          }
      }}
      to={to}
      className='nav-bar-item'
    >
      <h1>{text}</h1>
    </NavLink>
  )
}
