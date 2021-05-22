import React, { useState, useEffect } from 'react';
import { Dispatch } from "redux"
import { useDispatch } from "react-redux";
import {FetchData} from './fetchData';
//import {getUsers} from './api';
import UserArea from './components/usersArea';
import axios from 'axios';
import { User } from './interfaces';
import { usersListAct } from "./store/actionCreators";
import Header from './components/header';
import { error } from 'console';



const App = () => {
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<Error>();
  const API_URL:string = "https://randomuser.me/api";
  const dispatch: Dispatch<any> = useDispatch()
  
  useEffect(() =>{
    fetchUsers();
  },[]);

 const fetchUsers = (): void => {
  FetchData()
  .then(data => setUsersData(data))
  .catch((err: Error) => {
    console.log(err);
    setErrorMsg(err);
    setLoading(false);
  })
}
  const setUsersData = (data: any[]):void =>{
    const usersData:User[] = bringToUserType(data);
     dispatch(usersListAct(usersData));
     setLoading(false);
  }
  const bringToUserType = (data:any[]):User[] => {
    const usersData: User[] = data.map((item: any) => {
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
 return usersData;
  }
  return (
    <div className="app-cont">
      <div className="app-grid">
        <Header/>
        <UserArea />
        { 
          errorMsg && 
          <p>errorMsg</p>
        }
      </div>
    </div>
  );
}

export default App;
