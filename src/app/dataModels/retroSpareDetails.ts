export class RetroSpareDetails {
  constructor(
    public id: number,
    public category_id: number,
    public sub_category_id: number,
    public original_part_code: string,
    public roto_part_code: string,
    public dev_status: string,
    public price: number,
    public quantity: number,
    public image: string,
    public status: number,
    public part: string,
    public code: string
   ) { }
}
