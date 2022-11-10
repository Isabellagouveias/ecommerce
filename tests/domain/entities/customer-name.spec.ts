import { CustomerName } from '@/domain/entities/customer-name'

describe('CustomerName', () => {
  it('should return error if name < 2 chars', () => {
    const error = CustomerName.create('j') as Error
    expect(error.message).toBe('Invalid name')
  })

  it('should return error if name > 100 chars', () => {
    const invalidName = 'j'.repeat(101)
    const error = CustomerName.create(invalidName) as Error
    expect(error.message).toBe('Invalid name')
  })

  it('should return valid name', () => {
    const customerName = CustomerName.create('Samuel Lopes') as CustomerName
    expect(customerName.value).toBe('Samuel Lopes')
  })
})
