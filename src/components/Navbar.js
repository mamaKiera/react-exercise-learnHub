import React from 'react'
import classes from './Navbar.module.css'
import { useAuth } from '../providers/AuthProvider'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img src="/logo.svg"></img>
        <h2>LearnHub</h2>
      </div>
      <div className={classes.link}>
        {isLoggedIn ? (
          <button onClick={logout}>Log out</button>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink> <NavLink to="/login">Register</NavLink>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
