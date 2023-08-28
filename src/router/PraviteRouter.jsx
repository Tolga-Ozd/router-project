import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const PraviteRouter = ({user}) => {
    // const user = false

  return user ? <Outlet /> : <Navigate to="/login" />
}

export default PraviteRouter