import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const history = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("token")
        history('/')
    }
  return (
    <div className='navbar'>
        <div className='right'>
            <button onClick={handleLogout}>Logout</button>
        </div>
        <div className='left'>
            <button><Link to='/watchlist'>WatchList</Link></button>
        </div>
    </div>
  )
}

export default Navbar