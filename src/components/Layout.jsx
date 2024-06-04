import { Outlet } from 'react-router-dom'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Bubbles from './Bubbles'
import '../index.css'

const Layout = () => {
  return (
    
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout