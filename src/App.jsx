import reactLogo from './assets/react.svg';
import './global.css';

//Custom components
import Navbar from './components/Navbar/Navbar';
import TaskList from './components/TaskList/Tasklist';
import { useState } from 'react';

let id = 0;

const generateNewId = () => {
  id = id + 1;
  return id;
};
export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateNewId(),
      title,
      state,
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title="Backlog" onAddTask={addTask} tasks={tasks} />
        <TaskList title="In Progress" onAddTask={addTask} tasks={tasks} />
        <TaskList title="Done" onAddTask={addTask} tasks={tasks} />
      </div>
    </div>
  );
}
