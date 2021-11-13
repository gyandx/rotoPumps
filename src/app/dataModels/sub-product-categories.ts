export class SubProductCategories {
  'id': number;
  'category_id': number;
  'title': string;
  'categories': {
    'id': number,
    'name': string,
    'status': string,
    'description': string,
    'image_url': string
  };
}
