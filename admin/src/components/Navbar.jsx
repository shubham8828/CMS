import React from 'react'
import './Navbar.css'
import { FaSistrix } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container'>
      <Link to={'/'} className='link'>       
        <span>Admin Dashboard</span>
      </Link>
      <input type="text" placeholder='Search Here..' />
      <button><FaSistrix/> Search</button>
      <ul className='list'>
        <Link to={'/'} className='link'>
          <li>Home</li>
        </Link>
        <Link to={'/students'} className='link'>
        <li>Student</li>
        </Link>
        <Link to={'/teachers'} className='link'>
        <li>Teacher</li>
        </Link>
        <Link to={'/labs'} className='link'>
        <li>Lab</li>
        </Link>
        <Link to={'/classes'} className='link'>
        <li>Class</li>
        </Link>

        <Link to={'/schedules'} className='link'>
        <li>Schedule</li>
        </Link>
      </ul>
      
        <button>Login</button>
    </div>
  )
}

export default Navbar