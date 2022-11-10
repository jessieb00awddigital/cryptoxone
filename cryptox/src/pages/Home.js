import React from 'react';
import { ReactComponent as Image } from '../images/cryptoxlogo.svg'
import '../index.css';
import { Link } from "react-router-dom"

const Home = () => {
  return (
        <header className="App-header">
        <h1>Welcome to</h1>
        <Link to="/steps">
        <Image className='mainlogo'/>
        </Link>
 
      </header>
  )
}

export default Home
