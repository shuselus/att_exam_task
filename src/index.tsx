import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import './index.css';
import App from './App';
//import reducer from "./store/reducer";
import rootReducer from "./store/reducers"
import { UsersAction, UsersState } from "./type";
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

// const store: Store<UsersState, UsersAction> & {
 //  dispatch: DispatchType
// } = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

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