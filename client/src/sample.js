/*
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Component() {
  const array = ["ravi", "krishna", "gopi"];
  const [name, change] = useState(0);
  const [count,setCount]= useState(0)
  //const [coun,getcount]= useState(0)
  function add() {
    change((prv) => (prv + 1) % array.length);
  }
  function c(){
    setCount(count+1);
  }
  function d(){
    setCount(count-1);
  }
  return (
    <div>
      <h1>name: {array[name]}</h1>
      <button onClick={add}>click me</button>
      count:{count}
      <button onClick={c}>count</button>
      <button onClick={d}>discount</button>
    </div>
  );
}

root.render(
  <div>
    <Component />   
  </div>
);
*/