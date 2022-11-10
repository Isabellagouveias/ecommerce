import { CustomerEmail } from '@/domain/entities/customer-email'

describe('CustomerEmail', () => {
  it('should create a valid email', () => {
    const email = CustomerEmail.create('isabellagouveias@gmail.com') as CustomerEmail
    expect(email.value).toBe('isabellagouveias@gmail.com')
  })

  it('should not create invalid email', () => {
    const error = CustomerEmail.create('samuel.com') as Error
    expect(error.message).toBe('Invalid email')
  })
})
