import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Ahmad from "./pages/ahmad";
import Ali from "./pages/ali";
import Clients from "./pages/Clients";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/profile";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";
import {
  clients as startingClients,
  projects as startingProjects,
  tasks as startingTasks,
} from "./data/data";
import "./App.css";

function App() {
  const location = useLocation();
  const isAccountPage =
    location.pathname === "/login" || location.pathname === "/register";

  const [clients, setClients] = useState(startingClients);
  const [projects, setProjects] = useState(startingProjects);
  const [tasks, setTasks] = useState(startingTasks);

  function addClient(clientDetails) {
    setClients((currentClients) => {
      const nextId =
        Math.max(0, ...currentClients.map((client) => Number(client.id))) + 1;

      return [...currentClients, { id: nextId, ...clientDetails }];
    });
  }

  function addProject(projectDetails) {
    setProjects((currentProjects) => {
      const nextId =
        Math.max(0, ...currentProjects.map((project) => Number(project.id))) + 1;

      return [...currentProjects, { id: nextId, ...projectDetails }];
    });
  }

  function addTask(taskDetails) {
    setTasks((currentTasks) => {
      const nextId =
        Math.max(0, ...currentTasks.map((task) => Number(task.id))) + 1;

      return [...currentTasks, { id: nextId, ...taskDetails }];
    });
  }

  return (
    <div className="app">
      {!isAccountPage && <Sidebar />}

      <div className={isAccountPage ? "app-content account-content" : "app-content"}>
        {!isAccountPage && <Header />}

        <Routes>
          <Route
            path="/"
            element={
              <Dashboard clients={clients} projects={projects} tasks={tasks} />
            }
          />
          <Route
            path="/clients"
            element={
              <Clients
                clients={clients}
                projects={projects}
                onClientAdded={addClient}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <Projects projects={projects} onProjectAdded={addProject} />
            }
          />
          <Route
            path="/projects/:projectId"
            element={<ProjectDetails projects={projects} />}
          />
          <Route
            path="/tasks"
            element={
              <Tasks
                projects={projects}
                tasks={tasks}
                onTaskAdded={addTask}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ali" element={<Ali />} />
          <Route path="/ahmad" element={<Ahmad />} />
          <Route
            path="*"
            element={
              <Dashboard clients={clients} projects={projects} tasks={tasks} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

