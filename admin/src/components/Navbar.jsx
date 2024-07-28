import React from 'react'
import './Navbar.css'
import { FaSistrix } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='NavbarContainer'>
      <Link to={'/'} className='Navbarlink'>       
        <span>Admin Dashboard</span>
      </Link>
      <input type="text" placeholder='Search Here..' />
      <button><FaSistrix/> Search</button>
      <ul className='Navbarlist'>
        <Link to={'/'} className='Navbarlink'>
          <li>Home</li>
        </Link>
        <Link to={'/students'} className='Navbarlink'>
        <li>Student</li>
        </Link>
        <Link to={'/teachers'} className='Navbarlink'>
        <li>Teacher</li>
        </Link>
        <Link to={'/labs'} className='Navbarlink'>
        <li>Lab</li>
        </Link>
        <Link to={'/classes'} className='Navbarlink'>
        <li>Class</li>
        </Link>

        <Link to={'/schedules'} className='Navbarlink'>
        <li>Schedule</li>
        </Link>
      </ul>
      
        <button>Login</button>
    </div>
  )
}

export default Navbar