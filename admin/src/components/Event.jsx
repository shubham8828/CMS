import React from 'react'
import './Event.css'
import eventData from '../data/event.data.json'
const Event = () => {
  return (
<div className='tableContainer'>
      <h2>Event Data Table</h2>
      <table >
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Event Name</th>
            <th>Place</th>
            <th>Room No.</th>
          </tr>
        </thead>
        <tbody >
          {eventData.map(event => (
            <tr key={event.srno}>
              <td>{event.srno}</td>
              <td>{event.eventName}</td>
              <td>{event.place}</td>
              <td>{event.roomNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>  )
}

export default Event