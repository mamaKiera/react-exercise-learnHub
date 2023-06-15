import React from 'react'
import classes from './Home.module.css'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import useContentList from '../hooks/useContentList'
import Card from '../components/Card'
import Loading from '../components/Loading'
import { useAuth } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'

const Home = () => {
  const { dataList, loading } = useContentList()
  const { isLoggedIn } = useAuth()

  if (loading) return <Loading />
  return (
    <div>
      <Navbar />
      <Banner />
      <button className={classes.logInButton}>{isLoggedIn && <Link to="/Create">Create new content</Link>}</button>
      <div className={classes.container}>
        {dataList.data && dataList.data.map((item) => <Card key={item.id} data={item} />)}
      </div>
    </div>
  )
}

export default Home
