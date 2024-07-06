import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  return (
    <AppContext.Provider value={{ users, setUsers, currentUser, setCurrentUser, tasks, setTasks }}>
      {children}
    </AppContext.Provider>
  );
};
