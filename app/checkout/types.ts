export type CartItem = {
    slug: string;
    quantity: number;
  };
  
  export type Customer = {
    name: string;
    email: string;
    phone: string;
    zipcode: string;
    address: string;
    detailAddress: string;
    memo: string;
    newsletter: boolean;
  };
  
  export type Agreement = {
    privacy: boolean;
    age: boolean;
  };