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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    
      <BrowserRouter>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <Routes>
      <Route path='/home' element={<App />}/>
      <Route path='/' element={<Auth/>}/>
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
