import { useState } from "react";
import { Link } from "react-router-dom";
import AddProject from "../components/AddProject";

function Projects({ projects, onProjectAdded }) {
  const [searchText, setSearchText] = useState("");
  const [showForm, setShowForm] = useState(false);

  const visibleProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchText.toLowerCase()),
  );
  const inProgressCount = projects.filter(
    (project) => project.status === "In Progress",
  ).length;
  const completedCount = projects.filter(
    (project) => project.status === "Completed",
  ).length;
  const pendingCount = projects.filter(
    (project) => project.status === "Pending",
  ).length;

  return (
    <main className="page">
      <div className="page-heading">
        <div>
          <h1>Projects</h1>
          <p>Manage your project list.</p>
        </div>
        <div className="page-actions">
          <input
            type="search"
            placeholder="Search projects"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            aria-label="Search projects"
          />
          <button type="button" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Close form" : "Add project"}
          </button>
        </div>
      </div>

      {showForm && (
        <AddProject projects={projects} onProjectAdded={onProjectAdded} />
      )}

      <section className="card-grid" aria-label="Project totals">
        <article className="stat-card">
          <h2>Total projects</h2>
          <p>{projects.length}</p>
        </article>
        <article className="stat-card">
          <h2>In progress</h2>
          <p>{inProgressCount}</p>
        </article>
        <article className="stat-card">
          <h2>Completed</h2>
          <p>{completedCount}</p>
        </article>
        <article className="stat-card">
          <h2>Pending</h2>
          <p>{pendingCount}</p>
        </article>
      </section>

      <section className="panel">
        <div className="panel-heading">
          <h2>All projects</h2>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Project name</th>
                <th>Client</th>
                <th>Status</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {visibleProjects.map((project) => (
                <tr key={project.id}>
                  <td>
                    <Link to={`/projects/${project.id}`}>{project.name}</Link>
                  </td>
                  <td>{project.client}</td>
                  <td>
                    <span
                      className={`status status-${project.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td>{project.deadline}</td>
                </tr>
              ))}
              {visibleProjects.length === 0 && (
                <tr>
                  <td colSpan="4">No projects found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default Projects;

