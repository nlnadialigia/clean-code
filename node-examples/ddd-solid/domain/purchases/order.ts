class Order {
  public customerDocument: string
  private total: number
  private createdAt: Date

  constructor(total: number, customerDocument: string) {
    this.total = total
    this.createdAt = new Date()
    this.customerDocument = customerDocument
  }
}

export { Order };
