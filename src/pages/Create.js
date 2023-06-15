import * as React from 'react'
import ReactStars from 'react-stars'
//import withGuard from '../guards/withGuard'
import classes from './Create.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [videoUrl, setVideoUrl] = useState('')
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(0)
  const [canSubmit, setCanSubmit] = useState(false)
  const navigate = useNavigate()

  const formValidation = () => {
    if (comment.length !== 0 && videoUrl !== 0 && rating != 0) {
      setCanSubmit(true)
    } else {
      setCanSubmit(false)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const accessToken = localStorage.getItem('token')
    const postInfo = { videoUrl, comment, rating }
    console.log(postInfo)
    try {
      const response = await fetch('https://api.learnhub.thanayut.in.th/content', {
        method: 'POST',
        headers: {
          Authorization: `bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postInfo),
      })

      if (response.status !== 201) {
        console.log('error')
      }
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Create new content</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label htmlFor="video-url">Video URL</label>
          <input
            type="text"
            id="video-url"
            value={videoUrl}
            onChange={(e) => {
              setVideoUrl(e.target.value)
              formValidation()
            }}
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="comment">Comment (280 characters maximum)</label>
          <input
            type="text"
            id="comment"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value)
              formValidation()
            }}
          />
        </div>
        <div className={classes.formGroup}>
          <div className={classes.ratingContainer}>
            <label>Rating</label>

            <ReactStars
              count={5}
              value={rating}
              size={42}
              half={false}
              color2="#ff731d"
              onChange={(newRating) => {
                setRating(newRating)
                formValidation()
              }}
            />
          </div>
        </div>
        <div className={classes.formGroup}>
          <button type="submit" disabled={!canSubmit}>
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default Create
