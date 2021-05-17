import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { routeAct } from "../store/actionCreators";
import { User } from '../interfaces';
import UserListItem from './usersItem';
import CurentUserPanel from './curentUserPanel';
import { AppState } from "../store/reducers";

export const UserArea: React.FC = () => {
    const [userList, setUserList] = useState<User[] | null>(null);
    //const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);
    const [gotoUserDetails, setGotoUserDetails]= useState<boolean>(false);
    const dispatch: Dispatch<any> = useDispatch();
    const users = useSelector((state: AppState) => state.users);  
    const currentUser = useSelector((state: AppState) => state.currentUser);
    const routePage = useSelector((state: AppState) => state.routes); 
    const USERS_LIST = "USERS_LIST";
    const USERS_DETAILS = "USERS_DETAILS";

    useEffect(()=>{
        console.log("userList: ", userList);
        setUserList(userList);
        dispatch(routeAct(USERS_LIST));
    },[]);

    useEffect(()=>{
      if(currentUser.currenUser.id !== -1){
         dispatch(routeAct(USERS_DETAILS));
      }
    },[currentUser]);

     useEffect(()=>{
       if(routePage.route === USERS_LIST){
         setGotoUserDetails(false);
       }else{
         setGotoUserDetails(true);
       }
    },[routePage]);

    //const getCurrentUser = (user: User): void => {
    //   setCurrentUser(user);
    //};
    //getCurrentUser={getCurrentUser}

    return (
        <div className="user-cont">
           {
             users.users.length > 0 && !gotoUserDetails ?
             users.users.map((item: User, index: number) =>
               <UserListItem key={index} data={item}/>
             ): 
             <CurentUserPanel userData={currentUser.currenUser}/>
           }
        </div>
      );
    };
    export default UserArea;
    