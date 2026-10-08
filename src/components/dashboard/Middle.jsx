import { Link } from "react-router-dom";

function Middle({ projects, tasks }) {
  const recentProjects = projects.slice(-4).reverse();
  const openTasks = tasks.filter((task) => task.status === "Open").length;
  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress",
  ).length;
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed",
  ).length;

  return (
    <div className="dashboard-columns">
      <section className="panel">
        <div className="panel-heading">
          <h2>Recent projects</h2>
          <Link to="/projects">View all</Link>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Client</th>
                <th>Status</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {recentProjects.map((project) => (
                <tr key={project.id}>
                  <td>{project.name}</td>
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
            </tbody>
          </table>
        </div>
      </section>

      <section className="panel">
        <div className="panel-heading">
          <h2>Task overview</h2>
          <Link to="/tasks">View tasks</Link>
        </div>

        <div className="task-summary">
          <p>
            <span>Open</span>
            <strong>{openTasks}</strong>
          </p>
          <p>
            <span>In progress</span>
            <strong>{inProgressTasks}</strong>
          </p>
          <p>
            <span>Completed</span>
            <strong>{completedTasks}</strong>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Middle;

