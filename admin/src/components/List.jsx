import React from 'react'
import  './Event.css'

const List = ({Data,title,id,name,classes,rollNo}) => {
  return (

    <div className='tableContainer'>
        <h1>{title}</h1>
        <table>
            <thead>
                <tr>
                    <th>{id}</th>
                    <th>{name}</th>
                    <th>{classes}</th>
                    <th>{rollNo}</th>
                </tr>
            </thead>
            <tbody>
               { Data.map(student => (
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

export default List