import { ChangeEventHandler, FC, HTMLInputTypeAttribute } from 'react'
import { styled } from '@linaria/react'

import { Text } from './Text'
import { color } from '../../app/styles/constants'

const Container = styled.label`
  display: block;
`
const Label = styled(Text)`
  margin-left: 16px;
  margin-bottom: 8px;
  font-size: 18px;
`

const InputStyled = styled.input`
  width: 100%;
  border: 1px solid transparent;
  padding: 16px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 12px;
  background-color: ${color.input};
  &:focus-visible {
    border-color: ${color.border};
  }
`

const Error = styled(Text)`
  margin-top: 8px;
  margin-left: 16px;
  color: ${color.error};
`

type Props = {
  label: string
  type: HTMLInputTypeAttribute
  onChange: (text: string) => void
  value: string
  error?: string
  disabled?: boolean
  className?: string
  autoComplete?: string
  autoCapitalize?: string
}

const Input: FC<Props> = ({ label, onChange, error, className, ...inputProps }) => {
  const onInputChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) =>
    onChange(value)

  return (
    <Container className={className}>
      <Label>{label}</Label>
      <InputStyled {...inputProps} aria-invalid={!!error} onChange={onInputChange} />
      <Error role="alert">{error}</Error>
    </Container>
  )
}
console.log(color)
export { Input }
