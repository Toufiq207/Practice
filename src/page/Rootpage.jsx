import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../layout/Navbar'

const Rootpage = () => {
  return (
    <div>
<Navbar/>
        <Outlet/>
    </div>
  )
}

export default Rootpage