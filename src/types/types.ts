export interface CommonNavItemProps {
  isMenu?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  component?: React.ComponentType<any>;
  path?: string;
}
export interface Data<T> {
  data: T[];
  total: number;
  hasMore: boolean;
}
export interface Product {
  id?: number;
  title?: string;
  description?: string;
  category?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  tags?: string[];
  brand?: string;
  sku?: string;
  weight?: number;
  dimensions?: Dimensions;
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  reviews?: Review[];
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  meta?: Meta;
  images?: string[];
  thumbnail?: string;
}

export interface Dimensions {
  width?: number;
  height?: number;
  depth?: number;
}

export interface Meta {
  createdAt?: string;
  updatedAt?: string;
  barcode?: string;
  qrCode?: string;
}

export interface Review {
  rating?: number;
  comment?: string;
  date?: string;
  reviewerName?: string;
  reviewerEmail?: string;
}
export interface Category {
  value: string;
  name: string;
  img: string;
}
