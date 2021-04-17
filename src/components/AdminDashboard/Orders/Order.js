import React from 'react'

function Order({ order }) {
  const { serviceName, imgUrl, price, quantity, email, status } = order
  return (
    <tr>
      <th scope="row"><img src={imgUrl} alt="" style={{ height: '75px' }} /></th>
      <th scope="row">{serviceName}</th>
      <th scope="row">{email}</th>
      <th scope="row">{price}</th>
      <th scope="row">{status}</th>
      <th scope="row">{quantity}</th>

    </tr>
  )
}

export default Order
