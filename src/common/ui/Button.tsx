import { styled } from '@linaria/react'
import { color } from '../../app/styles/constants'

type Props = {
  stretch?: boolean
  loading?: boolean
}
const Button = styled.button<Props>`
  width: ${(props) => (props.stretch ? '100%' : '')};
  padding: 16px;
  background: ${color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  &:hover,
  &:focus {
    cursor: pointer;
  }
  &:focus-visible {
  }
`

export { Button }
