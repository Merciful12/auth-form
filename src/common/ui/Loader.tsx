import { styled } from '@linaria/react'

type Props = {
  color: string
  size: number
}

const Loader = styled.div<Props>`
  height: ${props => props.size}px;
  width:  ${props => props.size}px;
  border: 3px solid ${(props) => props.color};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export { Loader }
