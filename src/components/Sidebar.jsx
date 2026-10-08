import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <h1 className="sidebar-brand">Project Manager</h1>

      <nav className="sidebar-nav" aria-label="Main navigation">
        <NavLink to="/" end>
          Dashboard
        </NavLink>
        <NavLink to="/clients">Clients</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
      </nav>

      <button
        className="sidebar-logout"
        type="button"
        onClick={() => navigate("/login")}
      >
        Log out
      </button>
    </aside>
  );
}

export default Sidebar;

