import React from 'react'
import studentData from '../data/student.data.json'
import  './Event.css'
const studentList = () => {
  return (

    <div className='tableContainer'>
        <h1>Student List</h1>
        <table>
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Roll No</th>
                </tr>
            </thead>
            <tbody>
                {studentData.map(student => (
                    <tr key={student.studentid}>
                        <td>{student.studentid}</td>
                        <td>{student.name}</td>
                        <td>{student.class}</td>
                        <td>{student.rollno}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default studentList