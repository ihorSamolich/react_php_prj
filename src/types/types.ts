interface Base {
  id: number;
  creationAt: string;
  updatedAt: string;
}

export interface Category extends Base {
  name: string;
  image: string;
  description: string;
}

export interface CreateCategory {
  name: string;
  image: File;
  description: string;
}

export interface EditCategory {
  name: string;
  image?: File;
  description: string;
}

export interface Product extends Base {
  name: string;
  description: string;
  price: number;
  category_id: number;
  product_images: ProductImages[];
}

export interface ProductImages extends Base {
  product_id: number;
  priority: number;
  name: string;
}

export interface SpecialOffer extends Base {
  product_id: number;
  image: number;
  description: string;
}

export interface PaginationData {
  current_page: number;
  per_page: number;
  last_page: number;
  total: number;
}

export interface CategoryResponse extends PaginationData {
  data: Category[];
}

export interface ProductResponse extends PaginationData {
  data: Product[];
}
