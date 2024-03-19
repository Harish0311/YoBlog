import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Auth from './Auth';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store'
import {BrowserRouter, Route, Routes}from 'react-router-dom'
import PrimarySearchAppBar from "./components/Appbar";
import User from './user';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PrimarySearchAppBar></PrimarySearchAppBar>
      <BrowserRouter>
      
      <Routes>
      <Route path='/home' element={<App />}/>
      <Route path='/' element={<Auth/>}/>
      <Route path='/user' element={<User/>}/>
      </Routes>
    {/* <App /> */}
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
