import { CustomerPassword } from './customer-password'
import { CustomerEmail } from './customer-email'
import { CustomerCpf } from './customer-cpf'
import { CustomerName } from './customer-name'

export class Customer {
  private readonly _name: CustomerName
  private readonly _cpf: CustomerCpf
  private readonly _email: CustomerEmail
  private readonly _password: CustomerPassword

  private constructor (name: CustomerName, cpf: CustomerCpf, email: CustomerEmail, password: CustomerPassword) {
    this._name = name
    this._cpf = cpf
    this._email = email
    this._password = password
  }

  get name (): string {
    return this._name.value
  }

  get cpf (): string {
    return this._cpf.value
  }

  get email (): string {
    return this._email.value
  }

  get password (): string {
    return this._password.value
  }

  static create (input: Customer.Input): Customer | Error {
    const customerNameOrError = CustomerName.create(input.name)
    if (customerNameOrError instanceof Error) return customerNameOrError
    const customerCpfOrError = CustomerCpf.create(input.cpf)
    if (customerCpfOrError instanceof Error) return customerCpfOrError
    const customerEmailOrError = CustomerEmail.create(input.email)
    if (customerEmailOrError instanceof Error) return customerEmailOrError
    const customerPasswordOrError = CustomerPassword.create(input.password)
    if (customerPasswordOrError instanceof Error) return customerPasswordOrError
    return new Customer(customerNameOrError, customerCpfOrError, customerEmailOrError, customerPasswordOrError)
  }
}

export namespace Customer {
  export type Input = {
    name: string
    cpf: string
    email: string
    password: string
  }
}
