import { Link } from "react-router-dom";

function Bottom({ clients, tasks }) {
  const recentClients = clients.slice(-4).reverse();
  const recentTasks = tasks.slice(-4).reverse();

  return (
    <div className="dashboard-columns">
      <section className="panel">
        <div className="panel-heading">
          <h2>Recent clients</h2>
          <Link to="/clients">View all</Link>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              {recentClients.map((client) => (
                <tr key={client.id}>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="panel">
        <div className="panel-heading">
          <h2>Recent tasks</h2>
          <Link to="/tasks">View all</Link>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentTasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td>{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Bottom;

