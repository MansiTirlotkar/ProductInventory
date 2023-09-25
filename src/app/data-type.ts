export interface signUp {
    name: string;
    password: string;
    email: string;
  }

  export interface login{
    email:String,
    password:String
  }

  export interface product{
    name:string,
    price:number,
    category:string,
    color:string,
    description:string,
    image:string,
    id:number,
    quantity:undefined | number
    productId:undefined | number
  }

  export interface cart{
    name:string,
    price:number,
    category:string,
    color:string,
    description:string,
    image:string,
    id:number | undefined,
    quantity:undefined | number,
    userID:number,
    productId:number
  }
  export interface priceSummary{
    price:number,
    discount:number,
    tax:number,
    deliverycharges:number,
    total:number
  }
  export interface order{
    imageUrl: string;
    email:string,
    address:string,
    contact:string,
    totalPrice:number,
    userId:string,
    id:number|undefined
  }

  