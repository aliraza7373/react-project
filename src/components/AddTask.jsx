import { useState } from "react";
import "../AddClient.css";

function AddTask({ projects, tasks, onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [project, setProject] = useState("");
  const [status, setStatus] = useState("");
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const taskTitle = title.trim();
    if (!taskTitle || !project || !status || !deadline) {
      setError("Enter a task name, project, status, and deadline.");
      return;
    }

    const duplicateTask = tasks.some(
      (task) =>
        task.title.trim().toLowerCase() === taskTitle.toLowerCase() &&
        task.project === project,
    );

    if (duplicateTask) {
      setError("This task already exists for that project.");
      return;
    }

    const formattedDeadline = new Date(
      `${deadline}T00:00:00`,
    ).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

    onTaskAdded({
      title: taskTitle,
      project,
      status,
      deadline: formattedDeadline,
    });

    setTitle("");
    setProject("");
    setStatus("");
    setDeadline("");
    setError("");
  }

  return (
    <section className="form-card">
      <h2>Add a task</h2>

      <form className="form-grid" onSubmit={handleSubmit}>
        <label className="form-field">
          Task name
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </label>

        <label className="form-field">
          Project
          <select
            value={project}
            onChange={(event) => setProject(event.target.value)}
            required
          >
            <option value="">Choose a project</option>
            {projects.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </label>

        <label className="form-field">
          Status
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            required
          >
            <option value="">Choose a status</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>

        <label className="form-field">
          Deadline
          <input
            type="date"
            value={deadline}
            onChange={(event) => setDeadline(event.target.value)}
            required
          />
        </label>

        <div className="form-actions">
          <button type="submit">Save task</button>
          {error && <p className="form-message error">{error}</p>}
        </div>
      </form>
    </section>
  );
}

export default AddTask;

