import './App.css';
import { getTasks, createTask } from './services/api';
import { updateTask, deleteTask } from './services/api';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import React, { useState, useEffect } from 'react';
function App() {
	  const [tasks, setTasks] = useState([]);
	  const [loading, setLoading] = useState(true);

	  useEffect(() => {
		      fetchTasks();
		    }, []);

const fetchTasks = async () => {
  try {
    const res = await getTasks();
    setTasks(res.data);
    setLoading(false);
  } catch (err) {
    console.error('Failed to fetch tasks:', err);
    setLoading(false);
  }
};
const handleAdd = async (title) => {
 try {
	       const res = await createTask(title);
	       setTasks([...tasks, res.data]);
	     } catch (err) {
		           console.error('Failed to create task:', err);
		         }
};
 const handleUpdate = async (id, data) => {
 try {
      const res = await updateTask(id, data);
      setTasks(tasks.map(task => task._id === id ? res.data : task));
    } catch (err) {
      console.error('Failed to update task:', err);
    }
 };
const handleDelete = async (id) => {
 try {
	       await deleteTask(id);
	       setTasks(tasks.filter(task => task._id !== id));
	     } catch (err) {
		           console.error('Failed to delete task:', err);
		         }
};

const total = tasks.length;
const completed = tasks.filter(t => t.completed).length;
const pending = total - completed;

return (
  <div className="app">
    <div className="app-header">
      <div>
        <h1>My Tasks</h1>
        <p className="subtitle">Stay on top of your work</p>
      </div>
    </div>

    <AddTodo onAdd={handleAdd} />

    <div className="stats-bar">
      <div className="stat-card">
        <div className="stat-number">{total}</div>
        <div className="stat-label">Total</div>
      </div>
      <div className="stat-card">
        <div className="stat-number">{pending}</div>
        <div className="stat-label">Pending</div>
      </div>
      <div className="stat-card">
        <div className="stat-number">{completed}</div>
        <div className="stat-label">Done</div>
      </div>
    </div>

    {loading ? (
      <p className="empty">Loading tasks...</p>
    ) : (
      <TodoList
        tasks={tasks}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    )}
  </div>
);}

export default App;
