import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
      <ul className='d-flex flex-column p-5'>
        <Link to='/admin/dashboard/order' className='my-3 btn btn-primary'>
          All Order
        </Link>
        <Link to='/admin/dashboard/addservice' className='my-3 btn btn-primary'>
          Add Service
        </Link>
        <Link to='/admin/dashboard/addadmin' className='my-3 btn btn-primary'>
          Manage User
        </Link>
        <Link to='/admin/dashboard/adminForm' className='my-3 btn btn-primary'>
          Add Admin Form
        </Link>
        <Link to='/admin/dashboard/service' className='my-3 btn btn-primary'>
          Services
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
