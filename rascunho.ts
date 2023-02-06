// SRP -> a classe vai ser responsável somente por calcular o desconto do pedido
class CalculateOrderDiscount {
  public execute() {
    // cálculo do desconto
  }
}

class SubmitOrderInvoice {
  public execute() {
    // emissão da nota fiscal
  }
}

class CreateOrder {
  public execute() {
    // CalculateOrderDiscount
    // SubmitOrderInvoice
  }
}


export { CalculateOrderDiscount, SubmitOrderInvoice, CreateOrder };
