import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import './index.css';
import App from './App';
import rootReducer from "./store/reducers"
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({});

 const store = createStore(
   rootReducer,
   composeEnhancers(applyMiddleware(thunk))
 );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);