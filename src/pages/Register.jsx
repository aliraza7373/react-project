import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Account registration is not connected to a server yet.");
  }

  return (
    <main className="account-card">
      <h1>Create an account</h1>
      <form className="account-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" required />
        </label>

        <label>
          Email
          <input type="email" required />
        </label>

        <label>
          Password
          <input type="password" required />
        </label>

        <button type="submit">Register</button>
        {message && <p role="status">{message}</p>}
      </form>

      <Link className="account-link" to="/login">
        Back to log in
      </Link>
    </main>
  );
}

export default Register;

