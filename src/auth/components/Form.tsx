import { FormEventHandler } from 'react'
import { useStore } from '@nanostores/react'
import { styled } from '@linaria/react'

import { $loading, auth } from '../AuthModel'
import { Button } from '../../common/ui/Button'
import { EmailField, PasswordField } from './Fields'

const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 360px;
  row-gap: 16px;
`

const Form = () => {
  const loading = useStore($loading)

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    auth()
  }

  return (
    <FormStyled noValidate onSubmit={onSubmit}>
      <EmailField disabled={loading} />
      <PasswordField disabled={loading} />
      <Button loading={loading} stretch disabled={loading} type="submit">
        Login
      </Button>
    </FormStyled>
  )
}

export { Form }
