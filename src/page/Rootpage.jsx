import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Sidebar from '../layout/Sidebar'
import Footer from '../layout/Footer'

const Rootpage = () => {
  return (
    <div>
<Navbar/>
<Sidebar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Rootpage