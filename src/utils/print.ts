function repeatString(str: string, n: number) {
  return str.repeat(n);
}

const print = {
  _print(message: string, space: number = 0) {
    const t = space ? repeatString('  ', space) : ''
    console.log(`${t}${message}`)
  },
  title(message: string) {
    this._print(message)
  },
  text(message: string) {
    this._print(message, 2)
  }
}
export default print
