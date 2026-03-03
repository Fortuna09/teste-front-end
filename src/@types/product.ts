export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export interface ApiResponse {
  success: boolean;
  products: Product[];
}

export interface ProductShowcaseProps {
  variant: 'related' | 'featured';
  title?: string;
  showTabs?: boolean;
  showViewAll?: boolean;
  products: Product[];
  loading?: boolean;
  onBuyClick?: (product: Product) => void;
}

export interface ProductCardProps {
  product: Product;
  onBuyClick?: (product: Product) => void;
}