
# Fruit Project Backend

This repository contains the backend API for the Fruit Project, a task management application. It handles task creation, updates, deletion, and retrieval, and is built using Node.js, Express.js, and MongoDB.

## Table of Contents

1. [Project Setup](#project-setup)
2. [Running the Project](#running-the-project)
3. [Environment Variables](#environment-variables)
4. [API Endpoints](#api-endpoints)
5. [Project Structure](#project-structure)
6. [Technologies Used](#technologies-used)

---

## Project Setup

### Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/fruit_project_backend.git
   ```

2. **Navigate to the backend directory:**

   ```bash
   cd fruit_project/server
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the `server` directory and add the following:

   ```bash
   DATABASE_URL=<your-mongodb-connection-url>
   PORT=4000
   ```

   Replace `<your-mongodb-connection-url>` with your actual MongoDB connection URL.

## Running the Project

1. **Start the development server:**

   To run the server in development mode using nodemon:

   ```bash
   npm run dev
   ```

2. **Run the server in production:**

   After building the frontend, you can start the server in production mode:

   ```bash
   npm start
   ```

The backend will be running on `http://localhost:4000` (or the port specified in the `.env` file).

## Environment Variables

Ensure you have the following environment variables set in your `.env` file:

- **DATABASE_URL**: Your MongoDB connection URL.
- **PORT**: The port on which the backend server will run.

Example `.env` file:

```
DATABASE_URL=mongodb://localhost:27017/fruit_project
PORT=4000
```

## API Endpoints

Below is a list of available API endpoints in the backend:

| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| GET    | `/faqs`            | Get all tasks            |
| POST   | `/faqs`            | Create a new task        |
| PUT    | `/faqs/:id`        | Update an existing task  |
| DELETE | `/faqs/:id`        | Delete a task            |

## Project Structure

The project follows the structure below:

```
fruit_project/
│
├── config/             # Database configuration
│   └── database.js     # MongoDB connection setup
│
├── models/             # Mongoose models
│   └── TaskModel.js    # Task schema and model
│
├── routes/             # API routes
│   └── TaskRoute.js    # Routes for task management
│
├── server/             # Main server directory
│   ├── index.js        # Server entry point
│   └── .env            # Environment variables file
│
├── package.json        # Node.js dependencies
└── README.md           # Project documentation
```

## Technologies Used

- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing tasks.
- **Mongoose**: ODM library for MongoDB.
- **Nodemon**: Development tool for auto-restarting the server.
