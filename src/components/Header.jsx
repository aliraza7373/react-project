import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="topbar">
      <Link to="/profile">Julia Smith</Link>
    </header>
  );
}

export default Header;

