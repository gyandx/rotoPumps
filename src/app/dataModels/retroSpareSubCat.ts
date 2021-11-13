export class RetroSubSpareDetails {
  constructor(
    public id: string,
    public category_id: string,
    public description: string,
    public categories: {
      'id': string,
      'name': string,
      'status': string,
      'description': string,
      'image_url': string
    }) { }
}
