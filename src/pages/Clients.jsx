import { useState } from "react";
import { Link } from "react-router-dom";
import AddClient from "../components/AddClient";

function Clients({ clients, projects, onClientAdded }) {
  const [searchText, setSearchText] = useState("");
  const [showForm, setShowForm] = useState(false);

  const visibleClients = clients.filter((client) => {
    const searchValue = searchText.toLowerCase();
    return (
      client.name.toLowerCase().includes(searchValue) ||
      client.email.toLowerCase().includes(searchValue)
    );
  });
  const clientsWithProjects = clients.filter((client) =>
    projects.some(
      (project) =>
        project.client.toLowerCase() === client.name.toLowerCase(),
    ),
  ).length;

  return (
    <main className="page">
      <div className="page-heading">
        <div>
          <h1>Clients</h1>
          <p>Keep track of your client contact details.</p>
        </div>
        <div className="page-actions">
          <input
            type="search"
            placeholder="Search clients"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            aria-label="Search clients"
          />
          <button type="button" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Close form" : "Add client"}
          </button>
        </div>
      </div>

      {showForm && <AddClient onClientAdded={onClientAdded} />}

      <section className="card-grid" aria-label="Client totals">
        <article className="stat-card">
          <h2>Total clients</h2>
          <p>{clients.length}</p>
        </article>
        <article className="stat-card">
          <h2>Clients with projects</h2>
          <p>{clientsWithProjects}</p>
        </article>
        <article className="stat-card">
          <h2>Total projects</h2>
          <p>{projects.length}</p>
        </article>
      </section>

      <section className="panel">
        <div className="panel-heading">
          <h2>All clients</h2>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Joined date</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {visibleClients.map((client) => (
                <tr key={client.id}>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.date}</td>
                  <td>
                    {client.name === "Ali" && <Link to="/ali">View profile</Link>}
                    {client.name === "Ahmad" && (
                      <Link to="/ahmad">View profile</Link>
                    )}
                  </td>
                </tr>
              ))}
              {visibleClients.length === 0 && (
                <tr>
                  <td colSpan="4">No clients found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default Clients;

