import { useEffect, useState } from 'react'

const useContentList = () => {
  const [dataList, setDataList] = useState([])
  //const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.learnhub.thanayut.in.th/content')
        const data = await res.json()

        setDataList(data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return {
    dataList,
    setDataList,
    loading,
  }
}

export default useContentList
