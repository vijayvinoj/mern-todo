# MERN Todo App

A full-stack Todo application built with the MERN stack, supporting full CRUD operations with a responsive UI and REST API integration.

---

## Features

* Create new tasks
* View all tasks
* Update task status (completed / pending)
* Edit task title
* Delete tasks
* Task statistics (Total, Pending, Completed)
* Real-time UI updates
* REST API integration

---

## Tech Stack

### Frontend

* React
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## Project Structure

```
mern-todo/
├── backend/
│   ├── server.js
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── tasks.js
│   ├── controllers/
│   │   └── taskController.js (optional)
│   └── .env
│
└── frontend/
    └── src/
        ├── components/
        │   ├── AddTodo.js
        │   ├── TodoItem.js
        │   └── TodoList.js
        ├── services/
        │   └── api.js
        ├── App.js
        ├── App.css
        └── index.js
```

---

## Getting Started

### Prerequisites

* Node.js installed
* MongoDB installed and running locally

---

## Installation

### Clone the repository

```
git clone https://github.com/your-username/mern-todo.git
cd mern-todo
```

---

### Install backend dependencies

```
cd backend
npm install
```

---

### Install frontend dependencies

```
cd ../frontend
npm install
```

---

## Environment Variables

Create a `.env` file inside `backend/`

```
MONGO_URI=mongodb://127.0.0.1:27017/mern-todo
PORT=5000
```

---

## Running the App

### Terminal 1 — Backend

```
cd backend
npm run dev
```

---

### Terminal 2 — Frontend

```
cd frontend
npm start
```

---

Open browser at:
http://localhost:3000

---

## API Endpoints

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/tasks     | Get all tasks |
| POST   | /api/tasks     | Create a task |
| PUT    | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

---

## Environment Variables

| Variable  | Description               |
| --------- | ------------------------- |
| MONGO_URI | MongoDB connection string |
| PORT      | Backend server port       |

---

## Author

Vijay

---

## Notes

* Backend must be running for frontend to function properly
* Axios is used for API communication
* State is managed using React Hooks

---

