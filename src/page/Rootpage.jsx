import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Sidebar from '../layout/Sidebar'

const Rootpage = () => {
  return (
    <div>
<Navbar/>
<Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Rootpage