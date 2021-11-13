export class CartDetails {
  constructor(
    public productId: string,
    public code: string,
    public description: string,
    public price: number,
    public discountPrice: number,
    public type: string,
    public pole: number,
    public flow: string,
    public head: string,
    public speed: string,
    public power: string,
    public engineSpeed: string,
    public enginekW: string,
    public driveType: string,
    public productQuantity: number) { }
}
