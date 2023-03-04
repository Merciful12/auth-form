import { map, atom} from 'nanostores'
import isEmail from 'is-email'

import * as AuthService from './AuthService'

type Field = {
  value: string
  error?: string
}
const $email = map<Field>({ value: '' })
const changeEmail = (newEmail: string) =>
  $email.set({
    value: newEmail,
  })

const $password = map<Field>({ value: '' })
const changePassword = (newPassword: string) => $password.setKey('value', newPassword)

const $loading = atom(false)

const resetFields = () => {
  $email.set({ value: '' })
  $password.set({ value: '' })
}

const auth = async () => {
  const email = $email.get().value
  const password = $password.get().value
  if (!isEmail(email)) {
    $email.setKey('error', 'Incorrect email. Please follow the format "example@email.com".')
    return
  }
  try {
    $loading.set(true)
    await AuthService.auth({ email, password })
    resetFields()
  } finally {
    $loading.set(false)
  }
}

export { $email, $password, $loading, changeEmail, changePassword, auth }
