import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Order from './Order';

function Orders() {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    const getAllOrders = async () => {
      const fetchOrders = await axios.get(`http://localhost:5000/getOrders`);
      setAllOrders(fetchOrders.data);
      console.log(fetchOrders);
    }
    getAllOrders();
  }, [])
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.map((order) => <Order order={order} />)}
        </tbody>
      </table>
    </div>
  )
}

export default Orders
