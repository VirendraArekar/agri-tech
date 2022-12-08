import React from 'react';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { applyMiddleware, createStore } from "redux";
import reducers from "./store/reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(reducers, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
