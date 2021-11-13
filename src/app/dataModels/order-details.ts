export class OrderDetails {
  constructor(
    public id: number,
    public user_id: number,
    public address_id: number,
    public amount: number,
    public transaction_id: string,
    public order_status: any,
    public created_at: string,
    public updated_at: string,
    public itemQuantity: number) { }
}
