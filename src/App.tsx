import { useState, useEffect } from 'react';
import { Dispatch } from "redux"
import { useDispatch } from "react-redux";
import {FetchApiData} from './fetchApiData';
import UserArea from './components/usersArea';
import { usersListAct } from "./store/actionCreators";
import Header from './components/header';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<Error>();
  const dispatch: Dispatch<any> = useDispatch()
  
  useEffect(() =>{
    fetchUsers();
  },[]);

 const fetchUsers = (): void => {
  FetchApiData()
  .then(data => dispatch(usersListAct(data)))
  .catch((err: Error) => {
    console.log(err);
    setErrorMsg(err);
  })
  setLoading(false);
}
  
  return (
    <div className="app-cont">
      <div className="app-grid">
        <Header />
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
