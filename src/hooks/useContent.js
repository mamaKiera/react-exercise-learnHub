import { useEffect, useState } from 'react'

const useContent = (id) => {
  const [contentData, setContentData] = useState(null)
  //const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  // TODO: implement fetching logic here, don't forget to appropiately UPDATE ALL RELATED STATES according to each scenario
  // TODO: i.e. fetch completed, fetch failed due to technical reason
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.learnhub.thanayut.in.th/content/${id}`)
        const data = await res.json()

        // error handling

        setContentData(data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Hint! if you'd like to return usefull editPost function, you may need authorization header from useAuth() here
  //const { getAuthHeader } = useAuth()
  //const editPost = async (updateBody) => {
  // TODO: (Optional) implement editPost function, this function is intended to update content {postId} with given updateBody

  return {
    contentData,
    setContentData,
    loading,
    //editPost,
  }
}

export default useContent
