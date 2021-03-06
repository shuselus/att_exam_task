import React, {useState, useEffect, MouseEvent} from 'react';
import { Dispatch } from "redux"
import { useDispatch } from "react-redux";
import { currentUserAct } from "../store/actionCreators";
import {User} from '../interfaces';
import RightArrowSvg from '../svg/rightArrow.svg';

type Props = {
  data: User;
}

const UserListItem: React.FC<Props> = ({data}) => {
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
      <div className="user-list-item" onClick={(e) => onClickHandler(e)}>
        <p>{`${userData.name.title} ${userData.name.first} ${userData.name.last}`}</p>
        <img src={RightArrowSvg} className="right-arrow" alt="back-arrow" />
      </div>
  );
};
    export default UserListItem;
   