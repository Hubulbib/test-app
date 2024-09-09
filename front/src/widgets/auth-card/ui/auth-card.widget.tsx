import { FC, useContext, useState } from 'react'
import { Button, InputWLabel } from '../../../shared/ui'
import './auth-card.style.css'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../entities'

export const AuthCard: FC = observer(() => {
  const {
    userStore: { createOne },
  } = useContext(Context)

  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onClickButton = async () => {
    await createOne(login, password)
  }

  return (
    <div className='auth-card'>
      <h1>Регистрация</h1>
      <div className='auth-card__input-grid'>
        <InputWLabel text={'Логин'} value={login} onChange={setLogin} />
        <InputWLabel type={'password'} text={'Пароль'} value={password} onChange={setPassword} />
      </div>
      <Button text={'Создать'} onClick={onClickButton} />
    </div>
  )
})
