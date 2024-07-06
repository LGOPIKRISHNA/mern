/*
import React from "react";
function Fileds(){
    return(
        <div>
            <h1>Enter Name:</h1><input type="text" className="bg-red-100 indent-24 uppercase  p-0 justify-center"></input>
        </div>
    )
};
export default function Register(){
    return(
        <div className="container">
            <form>
            <h1 className="text-center bg-red-400 uppercase  font-bold round p-1 m-2">register form</h1>
            <div className="justify-center mx-28">
            <div className="flex indent-2 justify-center flex-col">
                <Fileds/>
                <h1>Enter Age:</h1><input type="number" className="bg-red-100 indent-24 uppercase  p-0 justify-center"></input>
                <h1>Enter Class:</h1><input type="text" className="bg-red-100 indent-24 uppercase  p-0 justify-center"></input>
                <h1>Enter Password:</h1><input type="password" className="bg-red-100 indent-24 uppercase  p-0 justify-center"></input>
            </div>
            </div>
            </form>
        </div>
    )
}
import React,{useState} from "react";
function Fileds(props){
    return(
        <div>
            <div className="mb-4">    
 <label className="block text-gray-700 text-sm font-bold 
mb-2" htmlFor="props.name">
 Name
 </label>
 <input
 className="shadow appearance-none border rounded wfull py-2 px-3 text-gray-700 leading-tight focus:outline-none 
focus:border-blue-500"
 id="username"
 type="text"
 placeholder="Enter your username"
 onChange={HandleValues}
 />
 </div>
        </div>
    )
}
export default function Register(){
    const [name,setuname]=useState('');
    const [password,setpass]=useState('');
    return(
        
        <form className="max-w-md mx-auto bg-white shadow-md rounded 
px-8 pt-6 pb-8 mb-4">
    <h1 className="bg-green-300 text-center font-bold">Register</h1>
 <Fileds/>
 <div className="mb-4">
 <label className="block text-gray-700 text-sm font-bold 
mb-2" htmlFor="props.age">
 Age
 </label>
 <input
 className="shadow appearance-none border rounded wfull py-2 px-3 text-gray-700 leading-tight focus:outline-none 
focus:border-blue-500"
 id="username"
 type="number"
 placeholder="Enter your username"
 onChange={HandleValues}
 />
 </div>

 <div className="mb-4">
 <label className="block text-gray-700 text-sm font-bold 
mb-2" htmlFor="props.username">
 Username
 </label>
 <input
 className="shadow appearance-none border rounded wfull py-2 px-3 text-gray-700 leading-tight focus:outline-none 
focus:border-blue-500"
 id="username"
 type="text"
 placeholder="Enter your username"
 onChange={HandleValues}
 />
 </div>

 <div className="mb-6">
 <label className="block text-gray-700 text-sm font-bold 
mb-2" htmlFor="props.password">
 Password
 </label>
 <input
 className="shadow appearance-none border rounded wfull py-2 px-3 text-gray-700 leading-tight focus:outline-none 
focus:border-blue-500"
 id="password"
 type="password"
 placeholder="Enter your password"
 onChange={HandleValues}
 />
 </div>
 <div className="flex items-center justify-between">
 <button
 className="bg-blue-500 hover:bg-blue-600 text-white 
font-bold py-2 px-4 rounded focus:outline-none focus:shadowoutline"
 type="button"
 onClick={HandleSign}
 >
 Sign In
 </button>
 </div>
 </form>
    )
}
    */

import React, { useState, useContext } from 'react';
import { AppContext } from './AppContext';

function Fields({ fieldName, fieldType, value, setForm }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  }

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={fieldName}>
        {fieldName}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
        name={fieldName}
        type={fieldType}
        value={value}
        onChange={handleChange}
        placeholder={`Enter your ${fieldName}`}
      />
    </div>
  );
}

export default function Register() {
  const { users, setUsers } = useContext(AppContext);
  const [form, setForm] = useState({
    Name: '',
    Age: '',
    Username: '',
    Password: '',
  });

  function handleSubmit() {
    setUsers([...users, form]);
    setForm({
      Name: '',
      Age: '',
      Username: '',
      Password: ''
    });
  }

  return (
    <div>
      <form className="flex-inline max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-10">
        <h1 className="text-xl text-center font-bold font-mono">Register</h1>
        <Fields fieldName="Name" fieldType="text" value={form.Name} setForm={setForm} />
        <Fields fieldName="Age" fieldType="number" value={form.Age} setForm={setForm} />
        <Fields fieldName="Username" fieldType="text" value={form.Username} setForm={setForm} />
        <Fields fieldName="Password" fieldType="password" value={form.Password} setForm={setForm} />
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
