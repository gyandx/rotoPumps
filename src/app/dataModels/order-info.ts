export class OrderInfo {
  "address_id": number;
  "id": number;
  "amount": number;
  "transaction_id": string;
  "status": any;
  "order_address": {
    "name": string;
    "phone": string;
    "pincode": string;
    "city": string;
    "house_number": string;
    "state": string;
    "country": string
  };
  "order_details": Array<Order>;
}

export interface Order {
  "code": string;
  "created_at": string;
  "description": string;
  "id": number;
  "order_id": number;
  "price": number;
  "quantity": number;
  "type": number;
  "updated_at": string;
}
