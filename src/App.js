import React from 'react'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import useContentList from './hooks/useContentList'
import { Route, Routes } from 'react-router-dom'
import Content from './pages/Content'
import Create from './pages/Create'

function App() {
  const { data } = useContentList()
  console.log(data)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Content/:id" element={<Content />} />
        <Route path="/Create" element={<Create />} />
      </Routes>
    </div>
  )
}

export default App
