import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Velo from './Velo';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Acceuil from './Acceuil';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Velo />
     <Routes>
     <Route path="/" element={<Acceuil/>}/>
     <Route path="/velos" element={<App/>}/>
     </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
