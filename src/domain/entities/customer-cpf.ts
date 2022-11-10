export class CustomerCpf {
  private readonly _value: string
  private static readonly _factor1 = 10
  private static readonly _factor2 = 11

  private constructor (cpf: string) {
    this._value = cpf
  }

  get value (): string {
    return this._value
  }

  static create (cpf: string): CustomerCpf | Error {
    cpf = removeNonDigits(cpf)
    if (!this.validate(cpf)) return new Error('Invalid CPF')
    return new CustomerCpf(cpf)
  }

  private static validate (cpf: string): boolean {
    if (!isValidLength(cpf) || allDigitsTheSame(cpf)) return false
    const digit1 = calculateDigit(cpf, this._factor1)
    const digit2 = calculateDigit(cpf, this._factor2)
    const checkDigit = cpf.slice(-2)
    const calculateCheckDigits = `${digit1}${digit2}`
    if (checkDigit !== calculateCheckDigits) return false
    return true
  }
}

function removeNonDigits (cpf: string): string {
  return cpf.replace(/\D+/g, '')
}

function isValidLength (cpf: string): boolean {
  return cpf.length === 11
}

function allDigitsTheSame (cpf: string): boolean {
  const [firstDigit] = cpf
  return [...cpf].every(digit => digit === firstDigit)
}

function calculateDigit (cpf: string, factor: number): number {
  let total = 0
  for (const digit of cpf) {
    if (factor > 1) {
      // atribuindo e somando
      total += parseInt(digit) * factor--
    }
  }
  const rest = total % 11
  return (rest < 2) ? 0 : 11 - rest
}
