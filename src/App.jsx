import reactLogo from './assets/react.svg';
import './global.css';

//Custom components
import Navbar from './components/Navbar/Navbar';
import TaskList from './components/TaskList/Tasklist';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <TaskList title="Backlog" />
        <TaskList title="In Progress" />
        <TaskList title="Done" />
        <TaskList title="Blocked" />
      </div>
    </div>
  );
}

export default App;
