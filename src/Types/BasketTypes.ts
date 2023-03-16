 export type BasketType = {
  id: string;
  userId: string;
  products: Array<BasketProductDto>;
  totalPrice: number;
};

 export type BasketProductDto = {
  id: string;
  quantity: number;
  basketId: string;
  productId: string;
};
