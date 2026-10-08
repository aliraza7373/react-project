import EmployeeDetails from "../components/EmployeeDetails";

function Ali() {
  const employee = {
    initials: "AR",
    name: "Ali Raza",
    role: "Frontend Developer",
    company: "AR Nexus",
    email: "ali.raza@example.com",
    phone: "0301-1234567",
    location: "Lahore, Pakistan",
    employeeId: "EMP-001",
    department: "Development",
    employmentType: "Full time",
    joiningDate: "February 10, 2025",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  };

  return <EmployeeDetails employee={employee} />;
}

export default Ali;

