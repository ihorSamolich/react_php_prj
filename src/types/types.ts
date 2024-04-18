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
  image: string;
  description: string;
  price: number;
  category_id: number;
}
