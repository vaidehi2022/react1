import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SecondHeading } from './second.js'
import { ThirdHeading } from './third.js'
import { Button } from './button.js'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    < SecondHeading />
    <ThirdHeading />
    <Button />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 

