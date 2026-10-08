function Profile() {
  return (
    <main className="page profile">
      <div className="page-heading">
        <div>
          <h1>My profile</h1>
          <p>Account information</p>
        </div>
      </div>

      <section className="profile-card">
        <div className="profile-heading">
          <div className="profile-initials" aria-hidden="true">
            JS
          </div>
          <div>
            <h2>Julia Smith</h2>
            <p>Frontend Developer</p>
          </div>
        </div>

        <section className="profile-section">
          <h3>Contact information</h3>
          <dl className="profile-info-grid">
            <div>
              <dt>Email</dt>
              <dd>juliasmith@example.com</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>0300-1234567</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>Lahore, Pakistan</dd>
            </div>
            <div>
              <dt>Department</dt>
              <dd>Development</dd>
            </div>
            <div>
              <dt>Joined</dt>
              <dd>March 10, 2025</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>Active</dd>
            </div>
          </dl>
        </section>

        <section className="profile-section">
          <h3>About</h3>
          <p>
            I am a frontend developer who enjoys building clear and useful web
            applications.
          </p>
        </section>

        <section className="profile-section">
          <h3>Skills</h3>
          <div className="profile-skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Profile;

