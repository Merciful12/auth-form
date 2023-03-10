import { styled } from '@linaria/react'

import { AuthPage } from '../auth'
import { reset } from './styles/reset'

const Container = styled.div`
  ${reset}
`

const App = () => (
  <Container>
    <AuthPage />
  </Container>
)

export { App }
