export class CustomerEmail {
  private readonly _value: string

  private constructor (email: string) {
    this._value = email
  }

  get value (): string {
    return this._value
  }

  static create (email: string): CustomerEmail | Error {
    email = format(email)
    if (!this.validate(email)) return new Error('Invalid email')
    return new CustomerEmail(email)
  }

  private static validate (email: string): boolean {
    if (email === undefined || email === null || email.length === 0) return false
    if (!isValidLength(email)) return false
    const tester = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
    if (!tester.test(email)) return false
    return true
  }
}

function isValidLength (email: string): boolean {
  return email.length < 255
}

function format (email: string): string {
  return email.trim().toLowerCase()
}
