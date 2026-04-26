import axios from 'axios';

const API = axios.create({
  baseURL: 'https://mern-todo-backend-sj52.onrender.com/api'
});

export const getTasks = () => API.get('/tasks');
export const createTask = (title) => API.post('/tasks', { title });
export const updateTask = (id, data) => API.put(`/tasks/${id}`, data);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
