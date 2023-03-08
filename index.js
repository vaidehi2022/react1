import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Heading from './heading'
import Button from './button'
import reportWebVitals from '../reportWebVitals';
import Fileds from './fileds';
// import Task from './assign2/task';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Heading heading = "Register here..."/>
    <Fileds/> <br></br>
    <Button button = "Submit"/>
     {/* <Task /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
