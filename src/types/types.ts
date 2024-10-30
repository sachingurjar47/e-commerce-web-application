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
  warrantyInformation?: WarrantyInformation;
  shippingInformation?: ShippingInformation;
  availabilityStatus?: AvailabilityStatus;
  reviews?: Review[];
  returnPolicy?: ReturnPolicy;
  minimumOrderQuantity?: number;
  meta?: Meta;
  images?: string[];
  thumbnail?: string;
}

export type AvailabilityStatus = "Low Stock" | "In Stock" | "Out of Stock";

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

export type ReturnPolicy =
  | "30 days return policy"
  | "60 days return policy"
  | "90 days return policy"
  | "No return policy"
  | "7 days return policy";
export type ShippingInformation =
  | "Ships in 1 month"
  | "Ships in 2 weeks"
  | "Ships in 1-2 business days"
  | "Ships in 1 week"
  | "Ships overnight"
  | "Ships in 3-5 business days";

export type WarrantyInformation =
  | "1 month warranty"
  | "1 year warranty"
  | "2 year warranty"
  | "Lifetime warranty"
  | "5 year warranty"
  | "1 week warranty"
  | "No warranty"
  | "6 months warranty"
  | "3 months warranty"
  | "3 year warranty";

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
