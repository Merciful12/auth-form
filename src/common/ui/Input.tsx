import { ChangeEventHandler, FC, HTMLInputTypeAttribute } from 'react'
import { styled } from '@linaria/react'

import { Text } from './Text'
import { color, font } from '../../app/styles/constants'

type ErrorProp = {
  error?: string
}
const Container = styled.label`
  display: block;
`
const Label = styled(Text)`
  display: inline-block;
  padding-left: 16px;
  margin-bottom: 8px;
`

const InputStyled = styled.input<ErrorProp>`
  color: ${(props) => (props.error ? color.error : 'unset')};
  width: 100%;
  border: 1px solid transparent;
  padding: 16px;
  ${font.body};
  border-radius: 12px;
  background-color: ${color.input};
  &:focus-visible {
    border-color: ${color.border};
  }
`

const Error = styled(Text)`
  display: inline-block;
  margin-top: 8px;
  padding-left: 16px;
  color: ${color.error};
  :empty {
    display: none;
  }
`

type Props = ErrorProp & {
  label: string
  type: HTMLInputTypeAttribute
  onChange: (text: string) => void
  value: string
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
      <Label as="span">{label}</Label>
      <InputStyled {...inputProps} aria-invalid={!!error} onChange={onInputChange} error={error} />
      <Error as="p" role="alert">
        {error}
      </Error>
    </Container>
  )
}

export { Input }
