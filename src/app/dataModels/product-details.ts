export class ProductDetails {
  'details': {
    'id': string;
    'code': string;
    'description': string;
    'price': number;
    'delivery': string;
    'pole': number;
    'speed': number;
    'flow': number;
    'head': number;
    'rotor': string,
    'stator': string,
    'whp_moc': string,
    'sealing': string,
    'inlet': string,
    'outlet': string,
    'productQuantity': number;
  };
  'motor': {
    'volt': string;
    'desc': string;
    'price': string
  };
  'warranty': Array<Warranty>;
  'accessories': Array<Accessory>;
  'spares': Array<Spare>;
}

export interface Warranty {
  'duration': string;
  'price': number;
  'desc': string;
}
export interface Accessory {
  'imgSrc': string;
  'productName': string;
  'productDesc': string;
  'accessoryQuantity': number;
  'productPrice': number;
}
export interface Spare {
  'imgSrc': string;
  'productName': string;
  'productDesc': string;
  'spareQuantity': number;
  'productPrice': number;
}
