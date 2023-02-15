import { styled } from '@linaria/react'

const Button = styled.button`
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
