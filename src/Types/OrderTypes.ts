export type OrderDto = {
  id: String;
  createdDate: Date;
  totalPrice: number;
  items: Array<OrderItemDto>;
  orderAddress: OrderAddressDto;
  billAddress: OrderAddressDto;
};

export type OrderItemDto = {
  id: String;
  createdDate: Date;
  quantity: number;
  price: number;
  productId: string;
  status: String;
};

export type OrderAddressDto = {
  id: string;
  addressName: string;
  phoneNumber: string;
  country: string;
  city: string;
  firstName: string;
  lastName: string;
  fullAddress: string;
};

export type CreateOrderReques = {
  userId: string;
  deliveryAddressId: string;
  billAddressId: string;
};
