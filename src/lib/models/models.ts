
export interface User {
    id? : string;
    name: string;
    phone: string;
}

export interface IBook {
    id: string;
    title: string;
    price: number; 
    img: string; 
    rating: { 
        rate: number;
        count: number;
    };
}
  