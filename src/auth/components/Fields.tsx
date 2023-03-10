import { FC } from 'react'
import { useStore } from '@nanostores/react'

import { Input } from '../../common/ui/Input'
import { $email, changeEmail, $password, changePassword } from '../AuthModel'

type DisabledProp = {
  disabled?: boolean
}

type Props = DisabledProp

const EmailField: FC<Props> = ({ disabled }) => {
  const { value, error } = useStore($email)
  return (
    <Input
      autoCapitalize="off"
      autoComplete="username"
      disabled={disabled}
      error={error}
      label="Email"
      value={value}
      onChange={changeEmail}
      type="email"
    />
  )
}

const PasswordField: FC<Props> = ({ disabled }) => {
  const { value, error } = useStore($password)
  return (
    <Input
      autoCapitalize="off"
      autoComplete="current-password"
      disabled={disabled}
      error={error}
      label="Password"
      value={value}
      onChange={changePassword}
      type="password"
    />
  )
}

export { EmailField, PasswordField }
