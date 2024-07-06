import React, { useState, useContext } from 'react';
import { AppContext } from './AppContext';

export default function TodoList() {
  const { tasks, setTasks } = useContext(AppContext);
  const [formData, setFormData] = useState({ time: '', note: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  function handleSubmit() {
    setTasks([...tasks, formData]);
    setFormData({ time: '', note: '' });
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div className="form">
        <input name="time" type="time" value={formData.time} onChange={handleChange} />
        <input name="note" type="text" value={formData.note} onChange={handleChange} />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <br />
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((data, index) => (
              <tr key={index}>
                <td>{data.time}</td>
                <td>{data.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
