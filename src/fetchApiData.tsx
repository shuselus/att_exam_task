import { User } from './interfaces';
import axios from 'axios';

export const FetchApiData = async (): Promise<User[]> => {
    try {
        const baseUrl = "https://randomuser.me/api"
        const resp = await axios.get(baseUrl + "?results=10");
        if (resp.status !== 200) {
            throw new Error('Something went wrong');
        }

        const data = await resp.data.results.map((item: any) => {
            const user:User = {
                id: item.id,
                name: {...item.name},
                email: item.email,
                location: {
                city: item.location.city,
                street: {
                    name: item.location.street.name,
                    number: item.location.street.number
                },
                country: item.location.country,
                postcode: item.location.postcode
                },
                phone: item.phone,
                pic: {...item.picture}
            };
           return user;
       });
       // console.log("FetchApiData>>>>", resp);
        return data;
    } catch (err) {
        throw err;
    }
};

export const bringToUserType = (arr:[]): User[] => {
    return arr.map((item: any) => {
        const user:User = {
            id: item.id,
            name: {...item.name},
            email: item.email,
            location: {
            city: item.location.city,
            street: {
                name: item.location.street.name,
                number: item.location.street.number
            },
            country: item.location.country,
            postcode: item.location.postcode
            },
            phone: item.phone,
            pic: {...item.picture}
        };
       return user;
   });
}