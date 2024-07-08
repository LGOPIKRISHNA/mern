import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './component/header';
// import Login from './component/Login';
// import Register from './component/Register';
// import ToDoList from './component/ToDoList';
// import PLM from './plm';
import App from './App'
// import Example from './Example';
import './index.css';

const root = document.getElementById('root');
const virtualRoot = ReactDOM.createRoot(root);

virtualRoot.render(
    <div>  
      <App/>
      <h1 className='text-yellow-1000 text-3xl'>mamammama</h1>
      {/* <Header/>
      <ToDoList/>
      {/* <FeedBack/> */}
      <h1>hi</h1>
      {/* <Example/> */} 
    </div>
);
