import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

const AuthProvider = (props) => {
  const { children } = props //children = <App/> เพราะเราครอบ App ด้วย <AuthProvider></AuthProvider> ในหน้า index.js
  const [isLoggedIn, setIsLoggedIn] = useState(!!token) //if token has value >> true, so we need 2 !
  const [username, setUsername] = useState(user)

  const login = async (username, password) => {
    const loginInfo = { username, password }
    try {
      const res = await fetch('https://api.learnhub.thanayut.in.th/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
      })
      const data = await res.json()

      if (data.statusCode === 401) {
        throw new Error(data.message) //เข้าไปที่ catch
      }

      localStorage.setItem('token', data.accessToken)
      localStorage.setItem('user', username)
      setIsLoggedIn(true)
      setUsername(username)
    } catch (err) {
      throw new Error(err.message)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setIsLoggedIn(false)
    setUsername(null)
  }

  return <AuthContext.Provider value={{ isLoggedIn, login, username, logout }}>{children}</AuthContext.Provider> //ส่ง object isLoggedIn เข้าไป
}

export default AuthProvider
