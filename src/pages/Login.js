import React, { useState } from 'react'
import classes from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate() //react hook that returns function
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(usernameInput, passwordInput) //เรียกใช้ฟังชั่น login
      navigate('/') //once logged in >> navigate to Home page
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Login</h1>

      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={(e) => setUsernameInput(e.target.value)} />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => setPasswordInput(e.target.value)} />
        </div>
        <div className={classes.formGroup}>
          <button type="submit" /*disabled={isSubmitting}*/>Login</button>
        </div>
      </form>

      <h2 className={classes.subtitle}>
        <Link to="/register">{`Don't have an account? Register`}</Link>
      </h2>
    </div>
  )
}

export default Login
