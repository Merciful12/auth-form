import { styled } from '@linaria/react'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import { color } from '../../app/styles/constants'
import { Loader } from './Loader'

type Props = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    stretch?: boolean
    loading?: boolean
  }
>

const ButtonStyled = styled.button<Props>`
  font-size: 18px;
  line-height: 24px;
  color: ${color.light};
  width: ${(props) => (props.stretch ? '100%' : '')};
  padding: 16px;
  background: ${color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  &:hover:not(:disabled),
  &:focus-visible:not(:disabled) {
    cursor: pointer;
    opacity: 0.4;
  }
`

const Button: FC<Props> = ({ children, loading, stretch, ...props }) => (
  <ButtonStyled stretch={stretch} {...props}>
    {loading ? <Loader size={24} color={color.light} /> : children}
  </ButtonStyled>
)

export { Button }
