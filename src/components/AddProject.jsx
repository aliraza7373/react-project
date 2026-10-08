import { useState } from "react";
import "../AddClient.css";

function AddProject({ projects, onProjectAdded }) {
  const [name, setName] = useState("");
  const [client, setClient] = useState("");
  const [status, setStatus] = useState("");
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const projectName = name.trim();
    const clientName = client.trim();
    if (!projectName || !clientName || !status || !deadline) {
      setError("Enter a project name, client, status, and deadline.");
      return;
    }

    const duplicateProject = projects.some(
      (project) => project.name.trim().toLowerCase() === projectName.toLowerCase(),
    );

    if (duplicateProject) {
      setError("A project with that name already exists.");
      return;
    }

    const formattedDeadline = new Date(
      `${deadline}T00:00:00`,
    ).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

    onProjectAdded({
      name: projectName,
      client: clientName,
      status,
      deadline: formattedDeadline,
    });

    setName("");
    setClient("");
    setStatus("");
    setDeadline("");
    setError("");
  }

  return (
    <section className="form-card">
      <h2>Add a project</h2>

      <form className="form-grid" onSubmit={handleSubmit}>
        <label className="form-field">
          Project name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>

        <label className="form-field">
          Client
          <input
            type="text"
            value={client}
            onChange={(event) => setClient(event.target.value)}
            required
          />
        </label>

        <label className="form-field">
          Status
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            required
          >
            <option value="">Choose a status</option>
            <option value="In Progress">In Progress</option>
            <option value="Pending">Pending</option>
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
          <button type="submit">Save project</button>
          {error && <p className="form-message error">{error}</p>}
        </div>
      </form>
    </section>
  );
}

export default AddProject;

