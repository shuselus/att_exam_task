import axios from 'axios';

export const fetchData = (api_url: string) => {
    return axios.get(api_url);
}