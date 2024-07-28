import React from 'react'
import './Card.css'
import { SiGoogleclassroom } from "react-icons/si";
import { PiStudentBold } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { RiComputerFill } from "react-icons/ri";


const Card = () => {
  return (
    <div className='cardContainer'> 
        <div className='card'>
          <h3>Class Rooms </h3>
            <SiGoogleclassroom className='classIcon'/> 
            <br />
            <span>100 + <br /> Class Rooms</span>
        </div>
        <div className='card'>
          <h3>Total Students </h3>
            <PiStudentBold className='classIcon'/> 
            <br />
            <span>500 + <br /> Students</span>
        </div>
        <div className='card'>
          <h3>Total Teachers </h3>
            <LiaChalkboardTeacherSolid className='classIcon'/> 
            <br />
            <span>50 + <br /> Teachers</span>
        </div>
        <div className='card'>
          <h3>Total Labs </h3>
            <RiComputerFill className='classIcon'/> 
            <br />
            <span>5 + <br /> Labs</span>
        </div>

    </div>
  )
}

export default Card