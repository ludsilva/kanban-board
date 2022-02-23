import './App.css';
import Navbar from './components/Navbar/Navbar';
import TaskList from './components/TaskLists/TaskList';
import {useState} from "react";

let idAccumulator = 0;
const generateId = () => {
  idAccumulator = idAccumulator + 1;
  return idAccumulator;
};

export default function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((exitingTasks) => {
      return exitingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className= "App">
      <Navbar />
      <div className="container">
        <TaskList title="Backlog" onAddTask={addTask} taskState="Não iniciado"
          tasks={tasks.filter((t) => t.state === "Não iniciado")} onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}  />
        <TaskList title="To do" onAddTask={addTask} taskState="Pendente"
          tasks={tasks.filter((t) => t.state === "Pendente")} onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}    
        />
        <TaskList title="In progress" onAddTask={addTask} taskState="Fazendo"
          tasks={tasks.filter((t) => t.state === "Fazendo")} onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList title="Completed" onAddTask={addTask} taskState="Completa"
          tasks={tasks.filter((t) => t.state === "Completa")} onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}