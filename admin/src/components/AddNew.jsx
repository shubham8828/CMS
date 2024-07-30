import React, { useState } from "react";
import "./AddNew.css";

const AddNew = ({
  id,
  title,
  name,
  Class,
  listTitle,
  action,
  op1,
  op2,
  op3,
  op1Value,
  op2Value,
  op3Value,
  defaultOp,
}) => {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({
    id: "",
    name: "",
    className: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCurrentStudent((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate ID and class
    if (!currentStudent.id) {
      setError("ID is required to add or update a student.");
      return;
    }
    if (!currentStudent.className) {
      setError("Class is required.");
      return;
    }

    const existingStudent = students.find(
      (student) => student.id === currentStudent.id
    );

    if (existingStudent) {
      // Update existing student
      setStudents(
        students.map((student) =>
          student.id === currentStudent.id ? currentStudent : student
        )
      );
    } else {
      // Add new student
      setStudents([...students, currentStudent]);
    }

    setError("");
    resetForm();
  };

  const handleEdit = (student) => {
    setCurrentStudent(student);
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const resetForm = () => {
    setCurrentStudent({ id: "", name: "", className: "" });
    setError("");
  };

  return (
    <div className="container">
      <div className="form-section">
        <h2>{title}</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
          <label htmlFor="id">{id}:</label>
          <input
            type="text"
            id="id"
            value={currentStudent.id}
            onChange={handleChange}
            required
          />

          <label htmlFor="name">{name}:</label>
          <input
            type="text"
            id="name"
            value={currentStudent.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="className">{Class}:</label>
          <select
            id="className"
            value={currentStudent.className}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              {defaultOp}
            </option>
            <option value={op1Value}>{op1}</option>
            <option value={op2Value}>{op2}</option>
            <option value={op3Value}>{op3}</option>
          </select>

          <button type="submit">Save</button>
          <button type="button" onClick={resetForm}>
            Reset
          </button>
        </form>
      </div>
      <div className="table-section">
        <h2>{listTitle}</h2>
        <table>
          <thead>
            <tr>
              <th>{id}</th>
              <th>{name}</th>
              <th>{Class}</th>
              <th>{action}</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.className}</td>
                <td>
                  <button onClick={() => handleEdit(student)}>Edit</button>
                  <button onClick={() => handleDelete(student.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddNew;
