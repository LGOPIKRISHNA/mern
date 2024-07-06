
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/header';
import Login from './component/Login';
//import FeedBack from './component/feedback';
import Register from './component/Register';
import ToDoList from './component/ToDoList';
import PLM from './plm';
import './index.css';
import DashBoard from './DashBoard';
import {BrowserRouter as Router,Routes,Link,Route} from 'react-router-dom'
import Mycomponent from './Mycomponent';
import Example from './Example';
//import { Mycontext } from './Mycontext';
const root =document.getElementById('root');
const virtualRoot= ReactDOM.createRoot(root)
virtualRoot.render(
  <Router>
  <div>  
    <h1 className='text-yellow-1000 text-3xl'>mamammama</h1>
    <Header/>
    <ToDoList/>
    {/*<FeedBack/>*/}
    <Example/>
    <PLM/>
  </div>
  <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>} />
    {/* <Route path="/dashboard" element={<DashBoard/>} /> */}
  </Routes>
  </Router>
);

