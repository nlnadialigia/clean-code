import {Order} from "../domain/purchases/order";

interface SubmitOrderRequest {
  customerDocument: string
  total: number
}

export class SubmitOrder {
  async execute({customerDocument, total}: SubmitOrderRequest) {
    const order = new Order(total, customerDocument)

    // Persistir no banco de dados
  }
}

