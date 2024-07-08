
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

var x={name:"krishna",age:"22"};
function App(){
  return(<div>
    <h1>{x["name"]+x["age"]}</h1>
  </div>);
}
export default App; //export the function outside the file
*/

import React from 'react';
import { AppProvider } from './component/AppContext';
import Register from './component/Register';
import Login from './component/Login';
import Dashboard from './DashBoard';
import TodoList from './component/ToDoList';
// import Header from './component/header';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the App</h1>
        </header>
        <main>
          <Register />
          <Login />
          <Dashboard />
          <TodoList />
        </main>
      </div>
    </AppProvider>
  );
}

export default App;
