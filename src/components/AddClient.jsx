import { useState } from "react";
import "../AddClient.css";

function AddClient({ onClientAdded }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const clientName = name.trim();
    const clientEmail = email.trim();

    if (!clientName || !clientEmail || !date) {
      setError("Fill in all three fields.");
      return;
    }

    const joinedDate = new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

    onClientAdded({
      name: clientName,
      email: clientEmail,
      date: joinedDate,
    });

    setName("");
    setEmail("");
    setDate("");
    setError("");
  }

  return (
    <section className="form-card">
      <h2>Add a client</h2>

      <form className="form-grid" onSubmit={handleSubmit}>
        <label className="form-field">
          Name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>

        <label className="form-field">
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>

        <label className="form-field">
          Joined date
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </label>

        <div className="form-actions">
          <button type="submit">Save client</button>
          {error && <p className="form-message error">{error}</p>}
        </div>
      </form>
    </section>
  );
}

export default AddClient;

