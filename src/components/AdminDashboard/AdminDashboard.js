import React from 'react'
import { Route, Switch } from 'react-router'
import AddServices from '../Admin/AddServices/AddServices'
import AddAdmin from './AddAdmin/AddAdmin'
import AdminForm from './AdminForm/AdminForm'
import Orders from './Orders/Orders'
import Services from './Services/Services'
import Sidebar from './Sidebar'

function AdminDashboard() {
  return (
    <div>
      <div className="row g-0">
        <div className="col-md-3" style={{ backgroundColor: '#cecece', height: '94vh' }}>
          <Sidebar />
        </div>
        <div className="col-md-9">
          <Switch>

            <Route path='/admin/dashboard/order'>
              <Orders />
            </Route>
            <Route path='/admin/dashboard/addservice'>
              <AddServices />
            </Route>
            <Route path='/admin/dashboard/addadmin'>
              <AddAdmin />
            </Route>
            <Route path='/admin/dashboard/adminForm'>
              <AdminForm />
            </Route>
            <Route path='/admin/dashboard/service'>
              <Services />
            </Route>
          </Switch>
        </div>

      </div>
    </div>
  )
}

export default AdminDashboard
