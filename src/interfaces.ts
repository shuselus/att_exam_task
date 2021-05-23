  export interface User{
    id: {
      name: string,
      value: string
    };
    name: {
      first: string;
      last: string;
      title: string
    };
    email: string;
    location: {
      city: string;
      street: {
        name:string;
        number: number;
      },
      country: string;
      postcode: number|string;
    };
    phone: string;
    pic: {
      large: string;
      medium: string; 
      thumbnail: string;
    };
  }
