import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { routeAct } from "../store/actionCreators";
import { User } from '../interfaces';
import UserListItem from './userListItem';
import UserThumbItem from './userThumbItem';
import UserDetails from './userDetails';
import { AppState } from "../store/reducers";


export const UserArea: React.FC = () => {
    //const [userList, setUserList] = useState<User[] | null>(null);
    const [gotoUserDetails, setGotoUserDetails]= useState<boolean>(false);
    const dispatch: Dispatch<any> = useDispatch();
    const users = useSelector((state: AppState) => state.users);  
    const currentUser = useSelector((state: AppState) => state.currentUser);
    const routePage = useSelector((state: AppState) => state.routes); 
    const viewThumbs = useSelector((state: AppState) => state.thumbs);  
    const [thumbsMode, setThumbsMode]= useState<boolean>(viewThumbs.thumb);
    const USERS_LIST = "USERS_LIST";
    const USERS_DETAILS = "USERS_DETAILS";

    useEffect(()=>{
        dispatch(routeAct(USERS_LIST));
    },[]);

    useEffect(()=>{
      if(currentUser.currenUser.name.first){
         dispatch(routeAct(USERS_DETAILS));
      }
    },[currentUser]);
       
     useEffect(()=>{
      setThumbsMode(viewThumbs.thumb);
    },[viewThumbs]);

    return (
      <div className="cont">
      { users.users.length > 0 &&
        <>
          {
              routePage.route === USERS_DETAILS ?
                <div className="user-details">
                  <UserDetails userData={currentUser.currenUser}/>
                </div>
                :
               
                    thumbsMode ?
                    <div className="user-list-cont">
                    {
                      users.users.map((item: User, index: number) =>
                        <UserListItem key={index} data={item}/>
                      )
                    }
                  </div> 
                  : 
                  
                  <div className="user-thumbs-cont">
                    {
                      users.users.map((item: User, index: number) =>
                        <UserThumbItem key={index} data={item}/>
                      )
                    }
                  </div>
                }
               
        </>
      }
      </div>
    );
    };
    export default UserArea;
    