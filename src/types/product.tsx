export interface ProductCategory {
  id: number;
  name: string;
  imageId: string | null;
  parentId: number | null;
  subs: ProductCategory[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  info: {
    temprature: [number, number];
    water: string;
    light: string;
    pot: string;
    size: number;
  };
  score: number;
  files: {
    fileId: string;
    thumbnail: boolean;
    order: number;
  }[];
  categoryId: number;
}
