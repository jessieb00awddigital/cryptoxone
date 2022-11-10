import React from 'react'
import { Link } from "react-router-dom"


const Navbar = () => {

  return (
    <>
        <div className='rounded-div flex justify-between items-center h-20 font-semibold'>
        <Link to="/">
            <h1 className='text-2xl'>Home</h1>
        </Link>

        <Link to="/dashboard">
            <h1 className='text-2xl'>Dashboard</h1>
        </Link>
    </div>
    </>
  )
}

export default Navbar