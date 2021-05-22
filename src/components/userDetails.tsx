import React, { useState, useEffect } from 'react';
import { User } from '../interfaces';
//import { CurrentUserState } from "../type";

type Props = {
    userData: User | null;
}

const UserDetails: React.FC<Props> = ({userData}) => {
    const [userInfo, setUserInfo] = useState<User | null>(null);
    const [imgLoader, setImgLoader] = useState(true);

    useEffect(()=>{
        setUserInfo(userData);
      },[userData]);
     // todo onLoad={setImgLoader(false)} 
    return(
       <>
           {
               userInfo &&
               <>  
                    <div className="img-placeholder">
                       <img className="user-details-img" src={userInfo.pic.large} />
                    </div>
                    <p><strong>name:</strong>
                        <span>{`${userInfo.name.title} ${userInfo.name.first} ${userInfo.name.last}`}</span>
                    </p>
                   
                    <div className="sep-txt-block">
                        <strong>location:</strong>
                        <div>
                            <span>city: {userInfo.location.city}</span><br/>
                            <span>street: {`${userInfo.location.street.name} ${userInfo.location.street.number}`}</span><br/>
                            <span>country: {userInfo.location.country}</span><br/>
                            <span>postcode: {userInfo.location.postcode}</span>
                        </div>
                    </div>
                    
                    <p>
                       <strong>email:</strong>
                       <span className="us-txt">{userInfo.email}</span>
                    </p>
                   
   
               </>
           }
          
       </>
   );
}
export default UserDetails