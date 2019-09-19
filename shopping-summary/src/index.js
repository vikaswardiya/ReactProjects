import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, combineReducers } from "redux";
import rootReducer from "./Reducers/rootReducer";
import userReducer from "./Reducers/userReducer";
import editReducer from './Reducers/editReducer';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import * as formsmethods from "./actions/listactions";
const allreducers = combineReducers({
  rootReducer,
  userReducer,
  editReducer
});

const store = createStore(allreducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


store.dispatch(formsmethods.getuserHandler());
serviceWorker.unregister();
