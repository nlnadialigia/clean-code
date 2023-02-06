import {Order} from "../../domain/purchases/order";
import {OrdersRepository} from "../orders-repository";

export class PostgresOrdersRepository implements OrdersRepository {
  create(order: Order): Promise<void> {
    // salva o order no banco de dados
  }
  
}
