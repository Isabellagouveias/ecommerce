import { CustomerPassword } from '@/domain/entities/customer-password'

describe('CustomerPassword', () => {
  it('should return an error if the password contains less than 12 characters', () => {
    const error = CustomerPassword.create('Sa@12') as Error
    expect(error).toBeInstanceOf(Error)
  })

  it('should return an error if the password contains less than 2 numbers', () => {
    const error = CustomerPassword.create('Isa#2asdasdsadas') as Error
    expect(error).toBeInstanceOf(Error)
  })

  it('should return an error if the password contains less than special characters', () => {
    const error = CustomerPassword.create('Isa92asdasdsadas') as Error
    expect(error).toBeInstanceOf(Error)
  })

  it('should create a valid password', () => {
    const password = CustomerPassword.create('Isabella#92aaaaa') as CustomerPassword
    expect(password.value).toBe('Isabella#92aaaaa')
  })
})
