import EmployeeDetails from "../components/EmployeeDetails";

function Ahmad() {
  const employee = {
    initials: "AK",
    name: "Ahmad Khan",
    role: "Backend Developer",
    company: "AR Nexus",
    email: "ahmad.khan@example.com",
    phone: "0300-1234567",
    location: "Lahore, Pakistan",
    employeeId: "EMP-002",
    department: "Development",
    employmentType: "Full time",
    joiningDate: "January 15, 2025",
    skills: ["JavaScript", "Node.js", "Express", "MongoDB"],
  };

  return <EmployeeDetails employee={employee} />;
}

export default Ahmad;

