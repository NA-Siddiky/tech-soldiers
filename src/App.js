import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Users from './components/Home/Users/Users';
import Login from './components/Login/Login/Login';
import AddServices from './components/Admin/AddServices/AddServices';
import Checkout from './components/Home/Checkout/Checkout';
import PaymentCard from './components/Payment/PaymentCard/PaymentCard';
import UserDashboard from './components/UserDashboard/UserDashboard';
import NavBar from './components/Shared/NavBar/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
function App() {
  return (
    <Router>
      <NavBar />
      <ToastContainer />
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/addUser">
          <Users></Users>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/addServices">
          <AddServices></AddServices>
        </Route>
        <PrivateRoute path="/checkout/:id">
          <Checkout></Checkout>
        </PrivateRoute>

        <PrivateRoute path="/payment">
          <PaymentCard></PaymentCard>
        </PrivateRoute>
        <PrivateRoute path="/user/dashboard">
          <UserDashboard />
        </PrivateRoute>
        <PrivateRoute path="/admin/dashboard">
          <AdminDashboard />
        </PrivateRoute>

      </Switch>
    </Router>
  );
}

export default App;
