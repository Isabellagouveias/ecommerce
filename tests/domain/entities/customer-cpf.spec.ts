import { CustomerCpf } from '@/domain/entities/customer-cpf'

describe('', () => {
  it('should not create invalid cpf with same digits', () => {
    const error = CustomerCpf.create('1111111111') as Error
    expect(error.message).toBe('Invalid CPF')
  })

  it('should not create with invalid cpf', () => {
    const cpf = '87952458755'
    const error = CustomerCpf.create(cpf) as Error
    expect(error.message).toBe('Invalid CPF')
  })

  it('should create a valid cpf', () => {
    const cpf = CustomerCpf.create('03851242106') as CustomerCpf
    expect(cpf.value).toBe('03851242106')
  })
})
