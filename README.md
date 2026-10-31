# 🚀 Kanban Task Management Dashboard

A modern and responsive Kanban Task Management application built with React and Tailwind CSS. It helps users organize tasks, track progress, manage priorities, and monitor productivity through an interactive dashboard.

## ✨ Features

- **Dashboard Overview** – View total tasks and status-wise task statistics.
- **Task Management (CRUD)** – Create, edit, and delete tasks.
- **Task Status Management** – Organize tasks into Todo, In Progress, and Completed.
- **Search Tasks** – Find tasks quickly using their titles.
- **Priority Filters** – Filter tasks by Low, Medium, and High priority.
- **Status Filters** – Filter tasks based on their current status.
- **LocalStorage Persistence** – Save tasks locally and retain them after refreshing the page.
- **Progress Tracking** – Visual progress bars and task completion statistics.
- **Responsive UI** – Optimized layout for mobile, tablet, and desktop screens.

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React Router DOM
- React Hooks (useState, useEffect, Custom Hooks)
- LocalStorage
- Remix Icons
- Vite

## 📂 Project Structure

```text
Kanban-Dashboard/
│
├── public/
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── EditTaskForm.jsx
│   │   ├── Navbar.jsx
│   │   └── TaskCard.jsx
│   │
│   ├── hooks/
│   │   └── TodoHooks.jsx
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx
│   │
│   ├── pages/
│   │   ├── AddTaskPage.jsx
│   │   ├── DashBoard.jsx
│   │   └── TaskPage.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

## ⚙️ Installation & Setup

**1. Clone the repository**

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

**2. Navigate to the project directory**

```bash
cd Kanban-Dashboard
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 📊 Dashboard

The dashboard provides:
- Total task count.
- Todo task count.
- In Progress task count.
- Completed task count.
- Overall completion percentage.
- Visual status-wise progress tracking.

## 🎯 Project Objective

The main objective of this project was to strengthen practical React development skills by building a real-world task management application independently, focusing on component-based architecture, state management, CRUD operations, filtering logic, and responsive UI development.

## 👨‍💻 Author

**Nishant Verma**

- GitHub: [nishantv687](https://github.com/nishantv687)

---

⭐ If you like this project, consider giving it a star!