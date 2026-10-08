import { useState } from "react";
import AddTask from "../components/AddTask";

function Tasks({ projects, tasks, onTaskAdded }) {
  const [searchText, setSearchText] = useState("");
  const [projectFilter, setProjectFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [showForm, setShowForm] = useState(false);

  const visibleTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesProject = !projectFilter || task.project === projectFilter;
    const matchesStatus = !statusFilter || task.status === statusFilter;

    return matchesSearch && matchesProject && matchesStatus;
  });

  const openCount = tasks.filter((task) => task.status === "Open").length;
  const inProgressCount = tasks.filter(
    (task) => task.status === "In Progress",
  ).length;
  const completedCount = tasks.filter(
    (task) => task.status === "Completed",
  ).length;

  return (
    <main className="page">
      <div className="page-heading">
        <div>
          <h1>Tasks</h1>
          <p>Manage tasks across your projects.</p>
        </div>
        <button type="button" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close form" : "Add task"}
        </button>
      </div>

      {showForm && (
        <AddTask projects={projects} tasks={tasks} onTaskAdded={onTaskAdded} />
      )}

      <section className="card-grid" aria-label="Task totals">
        <article className="stat-card">
          <h2>Open tasks</h2>
          <p>{openCount}</p>
        </article>
        <article className="stat-card">
          <h2>In progress</h2>
          <p>{inProgressCount}</p>
        </article>
        <article className="stat-card">
          <h2>Completed</h2>
          <p>{completedCount}</p>
        </article>
      </section>

      <section className="panel">
        <div className="panel-heading">
          <h2>All tasks</h2>
        </div>

        <div className="filter-row">
          <input
            type="search"
            placeholder="Search task names"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            aria-label="Search task names"
          />
          <select
            value={projectFilter}
            onChange={(event) => setProjectFilter(event.target.value)}
            aria-label="Filter by project"
          >
            <option value="">All projects</option>
            {projects.map((project) => (
              <option key={project.id} value={project.name}>
                {project.name}
              </option>
            ))}
          </select>
          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            aria-label="Filter by status"
          >
            <option value="">All statuses</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Project</th>
                <th>Status</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {visibleTasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td>{task.project}</td>
                  <td>
                    <span
                      className={`status status-${task.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {task.status}
                    </span>
                  </td>
                  <td>{task.deadline}</td>
                </tr>
              ))}
              {visibleTasks.length === 0 && (
                <tr>
                  <td colSpan="4">No tasks found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default Tasks;

