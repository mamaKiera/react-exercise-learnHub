import * as React from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import useContent from '../hooks/useContent'
import classes from './Content.module.css'
import ReactPlayer from 'react-player'
import Navbar from '../components/Navbar'

const Content = () => {
  const { id: postId } = useParams()
  const { contentData, loading } = useContent(postId)

  //const { id, isOwnPost } = useAuth()

  // TODO: Display differently given all possible loading, error, and ready state
  if (loading) return <Loading />

  const { videoTitle, comment, rating, postedBy, videoUrl } = contentData

  return (
    <>
      <Navbar />

      <div className={classes.container}>
        <div className={classes.content}>
          <div>
            <h4 className={classes.title}>{videoTitle}</h4>
          </div>

          <div className={classes.vdoContainer}>
            <ReactPlayer url={videoUrl} />
          </div>

          <div>
            <p className={classes.commentText}>{comment}</p>

            <div className={classes.commentFooter}>
              <p>
                {[...Array(rating).keys()].map((star) => (
                  <img key={star} className={classes.icon} src="/star.svg" alt="Rating Star" />
                ))}
              </p>
              <p>
                <span className={classes.emdash}>&mdash;</span> {postedBy.name}
              </p>

              {/*
              TODO: update the conditional rendering here, if you chosen to work with isOwnPost function, please continue to work on AuthProvider.tsx, otherwise you can use `id` from useAuth()
              isOwnPost && isOwnPost(data) && (
                <Link to={`/content/${postId}/edit`}>
                  <img className={classes.icon} src="/edit.svg" alt="Edit" />
                  Edit
                </Link>
              ) */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
