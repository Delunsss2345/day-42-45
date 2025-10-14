export type ProductState = {
  list: any[];
  loading: boolean;
};
export type ProductItemProps = {
  id: number | string;
  title: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  brand: string;
};
