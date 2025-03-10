# Task Scheduler

A modern web application designed to help you manage your tasks efficiently with an intuitive interface and powerful filtering capabilities.

## Features

- **Task Management**
  - Create tasks with title, description, priority levels, status, and date
  - Edit existing tasks to update information
  - Delete tasks when they're no longer needed
  - Set start and end dates for better planning

- **Organization Tools**
  - Filter tasks by priority (Low, Medium, High)
  - Filter by status (To Do, In Progress, Done)
  - Filter by custom date ranges
  - Search functionality to quickly find tasks by title

## Demo

Check out the live demo: [Task Scheduler Demo](https://goodness-flumaion-task-scheduler-749119130796.europe-west1.run.app)

## Technologies Used

- **Frontend**
  - React 19
  - TypeScript
  - Tailwind CSS for styling
  - Ant Design component library

- **Development & Build**
  - Vite for fast development and optimized builds
  - React Context API for state management
  - Day.js for date manipulation
  - UUID for unique identifier generation

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/code-matic/goodness-flumaion-task.git
   cd task-scheduler
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Application

Start the development server:
```sh
npm run dev
```

Build for production:
```sh
npm run build
```

Preview the production build:
```sh
npm run preview
```

## Deployment

This application can be deployed using Google Cloud Build. The included `cloudbuild.yaml` configuration handles:

1. Building the Docker image
2. Pushing the image to Google Container Registry
3. Deploying to Google Cloud Run

## ✅ Task Completion Status

- [x] **Initial Setup and Infrastructure**
  - [x] Set Up the Project
  - [x] Set Up ESLint
  - [x] Build Infrastructure with CI
  - [x] Create Simple Homepage
  - [x] Integrate React Router

- [x] **Task Components**
  - [x] Create TaskForm Component
  - [x] Create TaskList Component
  - [x] Create TaskItem Component

- [x] **Task Management**
  - [x] Manage State
  - [x] Implement Add Task Functionality
  - [x] Implement Edit Task Functionality
  - [x] Implement Delete Task Functionality

## License

This project is licensed under the MIT License - see the LICENSE file for details.
