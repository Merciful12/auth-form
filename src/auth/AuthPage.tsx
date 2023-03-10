import { FC } from 'react'
import { styled } from '@linaria/react'

import { Form } from './components/Form'

const Container = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`
const AuthPage: FC = () => (
  <Container>
    <Form />
  </Container>
)

export { AuthPage }
