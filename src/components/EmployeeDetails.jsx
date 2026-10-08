function EmployeeDetails({ employee }) {
  return (
    <main className="page employee-page">
      <div className="page-heading">
        <div>
          <h1>Employee details</h1>
          <p>Staff profile</p>
        </div>
      </div>

      <section className="employee-summary">
        <div className="profile-initials" aria-hidden="true">
          {employee.initials}
        </div>
        <div>
          <h2>{employee.name}</h2>
          <p>
            {employee.role} at {employee.company}
          </p>
        </div>
      </section>

      <div className="employee-list">
        <section className="employee-card">
          <h3>Contact details</h3>
          <dl>
            <dt>Email</dt>
            <dd>{employee.email}</dd>
            <dt>Phone</dt>
            <dd>{employee.phone}</dd>
            <dt>Location</dt>
            <dd>{employee.location}</dd>
          </dl>
        </section>

        <section className="employee-card">
          <h3>Work details</h3>
          <dl>
            <dt>Employee ID</dt>
            <dd>{employee.employeeId}</dd>
            <dt>Department</dt>
            <dd>{employee.department}</dd>
            <dt>Employment type</dt>
            <dd>{employee.employmentType}</dd>
            <dt>Joined</dt>
            <dd>{employee.joiningDate}</dd>
          </dl>
        </section>

        <section className="employee-card">
          <h3>Skills</h3>
          <div className="profile-skills">
            {employee.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default EmployeeDetails;

