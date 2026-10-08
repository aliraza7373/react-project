function Top({ clients, projects, tasks }) {
  const openTasks = tasks.filter((task) => task.status === "Open").length;
  const finishedTasks = tasks.filter(
    (task) => task.status === "Completed",
  ).length;

  return (
    <section className="card-grid" aria-label="Summary">
      <article className="stat-card">
        <h2>Total clients</h2>
        <p>{clients.length}</p>
      </article>
      <article className="stat-card">
        <h2>Total projects</h2>
        <p>{projects.length}</p>
      </article>
      <article className="stat-card">
        <h2>Open tasks</h2>
        <p>{openTasks}</p>
      </article>
      <article className="stat-card">
        <h2>Completed tasks</h2>
        <p>{finishedTasks}</p>
      </article>
    </section>
  );
}

export default Top;

