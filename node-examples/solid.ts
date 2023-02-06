/* SEM UTILIZAÇÃO DOS PRINCÍPIOS DO SOLID */

class CalculateOrderDiscountWrong {
  public execute(amount: number, installments: number, paymentMethod: string) {
    if (paymentMethod === 'billet') {
      return amount * 0.05
    }

    if (paymentMethod === 'credit') {
      if (installments === 1) {
        return amount * 0.05
      }
      if (installments <= 6) {
        return amount * 0.02
      }
      return 0
    }

    if (paymentMethod === 'debit') {
      return amount * 0.05
    }

    return 0;
  }
}

/* UTILIZAÇÃO DOS PRINCÍPIOS DO SOLID */

interface PaymentMethod {
  getDiscountAmount: (amount: number) => number;
}

class Billet implements PaymentMethod{
  getDiscountAmount(amount: number): number {
    return amount * 0.10
  }
}

class Credit implements PaymentMethod{
  private installments: number

  constructor(installments: number) {
    this.installments = installments
  }

  getDiscountAmount(amount: number): number {
    if (this.installments === 1) {
      return amount * 0.05
    }
    if (this.installments <= 6) {
      return amount * 0.02
    }
    return 0
  }
}

class Debit implements PaymentMethod{
  getDiscountAmount(amount: number): number {
    return amount * 0.05
  }
}

class CalculateOrderDiscount {
  private paymentMethod: PaymentMethod

  constructor(paymentMethod: PaymentMethod) {
    this.paymentMethod = paymentMethod
  }

  public execute(amount: number) {
    return this.paymentMethod.getDiscountAmount(amount)
  }
}

const calculateOrderDiscount = new CalculateOrderDiscount(new Debit())

calculateOrderDiscount.execute(2000)

export { CalculateOrderDiscount };
