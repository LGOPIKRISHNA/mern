import React, { useContext } from 'react';
import { AppContext } from './component/AppContext';

export default function Dashboard() {
  const { currentUser, tasks } = useContext(AppContext);

  if (!currentUser) {
    return <div>Please log in to see your profile and tasks.</div>;
  }

  return (
    <div className="justify-center mx-20">
      <h1 className="text-xl text-center font-bold font-mono">Profile</h1>
      <h2>Name: {currentUser.Name}</h2>
      <h2>Age: {currentUser.Age}</h2>
      <h2>Username: {currentUser.Username}</h2>

      <h1 className="text-xl text-center font-bold font-mono">Tasks</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task.time} - {task.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
