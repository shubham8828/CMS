import React from 'react'
import Card from '../components/Card'
import List from '../components/List'
import './Home.css'
import studentData from '../data/student.data.json'
import Event from '../components/Event'


const Home = () => {
  return (
    <div className='HomePage'>
      <div className='Card'>
        <Card />
      </div>
      <div className='Card'>
       <Event />
      </div>
      <div className='Card'>
        <List Data={studentData} title={'Student List'} 
          id={'Student ID'} name={'Name'} classes={'Class'}
          rollNo={'Roll No'}
        />
      </div>
    </div>
  )
}

export default Home