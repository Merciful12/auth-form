import { ChangeEventHandler, FC, HTMLInputTypeAttribute } from 'react'
import { styled } from '@linaria/react'

import { Text } from './Text'
import { color } from '../../app/styles/constants'

const Container = styled.label`
  display: block;
`
const Label = styled(Text)``

const InputStyled = styled.input``

const Error = styled(Text)`
  color: ${color.error};
  &:empty {
    opacity: 0;
  }
`

type Props = {
  label: string
  type: HTMLInputTypeAttribute
  onChange: (text: string) => void
  value: string
  error?: string
  disabled?: boolean
}

const Input: FC<Props> = ({ label, onChange, value, error, type, disabled }) => {
  const onInputChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) =>
    onChange(value)

  return (
    <Container>
      <Label>{label}</Label>
      <InputStyled
        disabled={disabled}
        aria-invalid={!!error}
        onChange={onInputChange}
        value={value}
        type={type}
      />
      <Error role="alert">{error}</Error>
    </Container>
  )
}

export { Input }
