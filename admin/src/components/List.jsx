import React from 'react'
import  './List.css'


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
               { Data.map(data => (
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.class}</td>
                        <td>{data.rollno}</td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    </div>
  )
}

export default List