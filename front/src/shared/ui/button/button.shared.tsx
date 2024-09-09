import { FC } from 'react'
import './button.style.css'

interface IButtonProps {
  text: string
  onClick: () => void
}

export const Button: FC<IButtonProps> = ({ text, onClick }: IButtonProps) => {
  return (
    <button className='button' onClick={onClick}>
      {text}
    </button>
  )
}
