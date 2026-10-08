import Bottom from "../components/dashboard/Bottom";
import Middle from "../components/dashboard/Middle";
import Top from "../components/dashboard/Top";

function Dashboard({ clients, projects, tasks }) {
  return (
    <main className="page">
      <div className="page-heading">
        <div>
          <h1>Dashboard</h1>
          <p>Here is an overview of your work.</p>
        </div>
      </div>

      <Top clients={clients} projects={projects} tasks={tasks} />
      <Middle projects={projects} tasks={tasks} />
      <Bottom clients={clients} tasks={tasks} />
    </main>
  );
}

export default Dashboard;

