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

function App() {
  return (
    <Router>
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
        <Route path="/checkout/:id">
          <Checkout></Checkout>
        </Route>
        <Route path="/payment">
          <PaymentCard></PaymentCard>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
