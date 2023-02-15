type Wait = (delay?: number) => Promise<void>
const wait: Wait = (delay) => new Promise((res) => setTimeout(res, delay))

export { wait }
