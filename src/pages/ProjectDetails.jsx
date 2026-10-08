import { Link, useParams } from "react-router-dom";

function ProjectDetails({ projects }) {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === Number(projectId));

  if (!project) {
    return (
      <main className="page">
        <div className="page-heading">
          <div>
            <h1>Project not found</h1>
            <p>That project is not in the project list.</p>
          </div>
        </div>
        <Link to="/projects">Back to projects</Link>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="page-heading">
        <div>
          <h1>{project.name}</h1>
          <p>Project details</p>
        </div>
      </div>

      <section className="panel">
        <dl className="project-details-list">
          <div>
            <dt>Client</dt>
            <dd>{project.client}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{project.status}</dd>
          </div>
          <div>
            <dt>Deadline</dt>
            <dd>{project.deadline}</dd>
          </div>
        </dl>
        <Link to="/projects">Back to projects</Link>
      </section>
    </main>
  );
}

export default ProjectDetails;
