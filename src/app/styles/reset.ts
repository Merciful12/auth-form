const reset = `
  :global() {
    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
      padding: 0;
      margin: 0;
    }
    *:focus,
    *:focus-visible {
      outline: none;
    }
  }
`

export { reset }
