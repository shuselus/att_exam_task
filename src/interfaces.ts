  export interface User{
    id: number;
    name: {
      first: string;
      last: string,
      title: string};
    email: string;
    location: {
      city: string,
      street: {
        name:string,
        number: number
      },
      country: string,
      postcode: number
    };
    pic: {
      large: string,
      medium: string, 
      thumbnail: string
    };
  }
