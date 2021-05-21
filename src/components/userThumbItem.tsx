import React, {useState, useEffect, MouseEvent} from 'react';
import { Dispatch } from "redux"
import { useDispatch } from "react-redux";
import { currentUserAct } from "../store/actionCreators";
import {User} from '../interfaces';

type Props = {
  data: User;
}

const UserThumbItem: React.FC<Props> = ({data}) => {
  const [userData, setUserData] = useState<User>(data);
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(()=>{
    setUserData(data);
  },[data])
  
  const onClickHandler = (e: MouseEvent<HTMLDivElement>):void => {
      e.preventDefault();
      dispatch(currentUserAct(userData));
  }

  return (
      <div className="user-thumb-item" onClick={(e) => onClickHandler(e)}>
        <div className="img-placeholder">
           <img src={userData.pic.large}  alt="user-pic" />
        </div>
        <p>{`${userData.name.first} ${userData.name.last}`}</p>
      </div>
  );
};
    export default UserThumbItem;
   