import React, {useState, useEffect, MouseEvent} from 'react';
import LeftArrowSvg from '../svg/leftArrow.svg';
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { routeAct } from "../store/actionCreators";
import { AppState } from "../store/reducers";
   
const Header: React.FC = () => {
    const [headerTxt, setHeaderTxt] = useState<string>("User List");
    const [showBackArrow, setShowBackArrow] = useState<boolean>(false);
    const USERS_LIST = "USERS_LIST";
    const USERS_DETAILS = "USERS_DETAILS";
    const dispatch: Dispatch<any> = useDispatch();
    const routePage = useSelector((state: AppState) => state.routes); 

   useEffect(() =>{
      setHeaderTxt(routePage.route === USERS_DETAILS? "User Details" : "User List")
      setShowBackArrow(routePage.route === USERS_DETAILS ? true : false)
   },[routePage]);
   
   const goBackHandler = (e: MouseEvent<HTMLDivElement>):void => {
      e.preventDefault();
      dispatch(routeAct(USERS_LIST));
   }
    return(
        <div className="app-header">
                <div className="header-grid">
                    
                    <div className="header-grid-item">
                        {
                          showBackArrow && 
                            <div className="back-btn-cont" onClick={(e) => goBackHandler(e)}>
                                <img src={LeftArrowSvg} className="back-arrow" alt="back-arrow" />
                                <h4>User List</h4>
                            </div>
                        }
                    </div>
                   
                    <div className="header-grid-item">
                       <h3 className="header-title">{headerTxt}</h3>
                    </div>
                </div>
        </div>
    );
}
export default Header;