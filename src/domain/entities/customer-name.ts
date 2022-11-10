export class CustomerName {
  private readonly _value: string

  constructor (name: string) {
    this._value = name
  }

  get value (): string {
    return this._value
  }

  static create (name: string): CustomerName | Error {
    const isValidName = this.validateName(name)
    if (isValidName) return new CustomerName(name)
    return new Error('Invalid name')
  }

  static validateName (name: string): boolean {
    if (name.trim().length < 2 || name.trim().length > 100) return false
    return true
  }
}
