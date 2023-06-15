import React from 'react'
import classes from './Card.module.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
  const { data } = props

  return (
    <Link to={`/content/${data.id}`} className={classes.card} style={{ textDecoration: 'none' }}>
      <img className={classes.thumbnail} src={data.thumbnailUrl} />
      <div className={classes.description}>
        <div>
          <div>
            <h4 className={classes.title}>{data.videoTitle}</h4>
            <h5 className={classes.subtitle}>{data.creatorName}</h5>
          </div>

          <h5 className={classes.comment}>{data.comment}</h5>
        </div>

        <div className={classes.lastLine}>
          <p>{data.postedBy.name}</p>
          <div className={classes.rating}>
            {[...Array(data.rating).keys()].map((star) => (
              <img key={star} className={classes.star} src="/star.svg" alt="Rating Star" />
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
