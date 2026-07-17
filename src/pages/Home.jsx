import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  // GET Students
  const fetchStudents = () => {
    axios
      .get("https://studentportal2026xyz-b6eyebgzfubyhgfn.centralindia-01.azurewebsites.net/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => console.log(error));
  };

  // DELETE Student
  const deleteStudent = (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) {
      return;
    }

    axios
      .delete(`https://studentportal2026xyz-b6eyebgzfubyhgfn.centralindia-01.azurewebsites.net/students/${id}`)
      .then(() => {
        alert("Student deleted successfully!");
        fetchStudents();
      })
      .catch((error) => console.log(error));
  };

  // EDIT Student
  const editStudent = (student) => {
    const newName = prompt("Enter Name", student.name);
    if (newName === null) return;

    const newAge = prompt("Enter Age", student.age);
    if (newAge === null) return;

    const newCourse = prompt("Enter Course", student.course);
    if (newCourse === null) return;

    axios
      .put(`https://studentportal2026xyz-b6eyebgzfubyhgfn.centralindia-01.azurewebsites.net//${student.id}`, {
        name: newName,
        age: newAge,
        course: newCourse,
      })
      .then(() => {
        alert("Student updated successfully!");
        fetchStudents();
      })
      .catch((error) => console.log(error));
  };

  return (
  <div style={{ padding: "40px", fontFamily: "Arial" }}>

    <h1
      style={{
        textAlign: "center",
        color: "#2c3e50",
        marginBottom: "30px",
      }}
    >
      🎓 Student Portal
    </h1>

    {/* Dashboard Cards */}

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "30px",
        gap: "20px",
      }}
    >

      <div
        style={{
          flex: 1,
          background: "#3498db",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h3>Total Students</h3>
        <h2>{students.length}</h2>
      </div>

      <div
        style={{
          flex: 1,
          background: "#27ae60",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h3>Average Age</h3>
        <h2>
          {students.length > 0
            ? (
                students.reduce(
                  (sum, student) => sum + Number(student.age),
                  0
                ) / students.length
              ).toFixed(1)
            : 0}
        </h2>
      </div>

      <div
        style={{
          flex: 1,
          background: "#9b59b6",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h3>Total Courses</h3>
        <h2>
          {new Set(students.map((student) => student.course)).size}
        </h2>
      </div>

    </div>

    {/* Student Table */}

    <table
      border="1"
      cellPadding="10"
      cellSpacing="0"
      style={{
        width: "100%",
        borderCollapse: "collapse",
        textAlign: "center",
      }}
    >

      <thead
        style={{
          background: "#2c3e50",
          color: "white",
        }}
      >
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>

        {students.map((student) => (

          <tr key={student.id}>

            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.course}</td>

            <td>
              <button
                onClick={() => editStudent(student)}
                style={{
                  background: "#f39c12",
                  color: "white",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
            </td>

            <td>
              <button
                onClick={() => deleteStudent(student.id)}
                style={{
                  background: "#e74c3c",
                  color: "white",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>
);
}

export default Home;
