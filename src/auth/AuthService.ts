import { wait } from '../common/utils/wait'
import type { Credentials } from './types'

const auth = async (credentials: Credentials) => {
  await wait(2000)
  alert(JSON.stringify(credentials))
}

export { auth }
