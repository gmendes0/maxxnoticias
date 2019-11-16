import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ title, image, description, publishedAt, source }) {
  const date = new Date(publishedAt)
  return (
    <div className="card my-4 mx-3 card-noticia" style={{width: '16 rem'}}>
      <img className="card-img-top" src={image} alt=""/>
      <div className="card-body">
        <p className="card-title h6">
          {title}
        </p>
        <p className="card-text truncate">
          {description}
        </p>
        <hr/>
        <p className="card-text">
          <small className="text-muted">
            {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`} - fonte: {source}
          </small>
        </p>
        <Link to='/a' className="stretched-link" />
      </div>
    </div>
  )
}
