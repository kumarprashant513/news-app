import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import AddNews from '../pages/AddNews'
import ManageNews from '../pages/ManageNews'

function Sidebar() {
  return (
    <div className='sidebar'>

      <ul>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/add'>Add News</Link></li>
        <li><Link to='/manage'>Manage News</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar
