import React,{useState} from 'react'
import './Student.css'
const Student = () => {

  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({ id: '', name: '', className: '', rollno: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCurrentStudent(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStudent.id) {
      setStudents(students.map(student => student.id === currentStudent.id ? currentStudent : student));
    } else {
      setStudents([...students, { ...currentStudent, id: Date.now().toString() }]);
    }
    resetForm();
  };

  const handleEdit = (student) => {
    setCurrentStudent(student);
  };

  const handleDelete = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const resetForm = () => {
    setCurrentStudent({ id: '', name: '', className: '', rollno: '' });
  };


 
  return (
    <div className="container">
      <div className="form-section">
        <h2>Student Management</h2>
        <form onSubmit={handleSubmit}>
          <input type="hidden" id="id" value={currentStudent.id} />
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={currentStudent.name} onChange={handleChange} required />
          <label htmlFor="className">Class:</label>
          <input type="text" id="className" value={currentStudent.className} onChange={handleChange} required />
          <label htmlFor="rollno">Roll No:</label>
          <input type="number" id="rollno" value={currentStudent.rollno} onChange={handleChange} required />
          <button type="submit">Save</button>
          <button type="button" onClick={resetForm}>Reset</button>
        </form>
      </div>
      <div className="table-section">
        <h2>Student List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Roll No</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.className}</td>
                <td>{student.rollno}</td>
                <td>
                  <button onClick={() => handleEdit(student)}>Edit</button>
                  <button onClick={() => handleDelete(student.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;
