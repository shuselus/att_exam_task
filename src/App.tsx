import React, { useState, useEffect } from 'react';
import { Dispatch } from "redux"
import { useDispatch } from "react-redux";
//import {fetchData} from './fetchData';
import UserArea from './components/usersArea';
import axios from 'axios';
import { User } from './interfaces';
import { usersListAct } from "./store/actionCreators";
import Header from './components/header'


const App = () => {
  //const [userDataList, setUserDataList] = useState<User[]>([]);
  const API_URL:string = "https://randomuser.me/api";
  const dispatch: Dispatch<any> = useDispatch()
  
  useEffect(() =>{
    axios(API_URL+"?results=10")
    .then((response) => {
      //console.log(response.data.results)
      const usersData: User[] = response.data.results.map((item: any) => {
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
            pic: {...item.picture}
         };
           return user;
      });
      //console.log("fetched user data", usersData)
      setUsersData(usersData);
    })
    .catch((error) => console.log(error))
  },[]);

  //useEffect(() =>{
    //console.log("users1: ", users.users);
    //setUserDataList(users);
 // },[users]);

  const setUsersData = (data: User[]) => dispatch(usersListAct(data))
    
  return (
    <div className="app-cont">
        <Header/>
        <UserArea />
    </div>
  );
}

export default App;
