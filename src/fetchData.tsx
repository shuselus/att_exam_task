import React, { useState, useEffect } from 'react';
import axios, {AxiosResponse} from 'axios';


export const FetchData = async () => {
    const baseUrl: string = "https://randomuser.me/api"
    return await axios.get(baseUrl + "?results=10")
        .then((response) => {
           // if(response.status === 200) //todo
            return response.data.results;
           
        })
        //.catch((error) => console.log(error))

   

    

}

