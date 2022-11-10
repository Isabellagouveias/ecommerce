export class CustomerPassword {
  private readonly _value: string
  private static readonly specialCharacters = ['!', '@', '#', '&', '$', '_']

  private constructor (password: string) {
    this._value = password
  }

  get value (): string {
    return this._value
  }

  static create (password: string): CustomerPassword | Error {
    if (!this.validate(password)) return new Error('Invalid password')
    return new CustomerPassword(password)
  }

  private static validate (password: string): boolean {
    if (password === undefined || password === null || password.length < 12) return false
    const onlyNumber = password.replace(/\D+/g, '')
    if (onlyNumber.length < 2) return false
    const containsSpecialCharacters = password.split('').some(character => this.specialCharacters.includes(character))
    if (!containsSpecialCharacters) return false
    return true
  }
}
