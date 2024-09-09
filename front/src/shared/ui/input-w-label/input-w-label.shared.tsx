import { FC } from 'react'
import './input-w-label.style.css'

interface IInputWLabelProps {
  text: string
  value: string
  onChange: (value: string) => void
  type?: string
}

export const InputWLabel: FC<IInputWLabelProps> = ({ text, value, onChange, type }: IInputWLabelProps) => {
  return (
    <div className='input-w-label'>
      <label>{text}</label>
      <input type={type ? type : 'text'} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}
