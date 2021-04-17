import React from 'react'

function AdminUser({ user, makeAdmin }) {
  const { email, name, role, } = user
  return (
    <tr>
      <th scope="row">{name}</th>
      <th scope="row">{email}</th>
      <th scope="row">{role}</th>
      <th scope="row">
        <button class="btn btn-info" onClick={() => makeAdmin(email)}> Make Admin</button>
      </th>
    </tr>
  )
}

export default AdminUser
