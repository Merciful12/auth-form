import { css } from '@linaria/core'

const reset = css`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  *:focus:not(:focus-visible) {
    outline: none !important;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
  }

  ul,
  ol {
    list-style: none;
  }

  fieldset {
    border: none;
  }
`

export { reset }
