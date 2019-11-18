import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ article }) {
  const date = new Date(article.publishedAt)
  return (
    <div className="card my-4 mx-3 card-noticia" style={{width: '16 rem'}}>
      <img className="card-img-top" src={article.urlToImage} alt=""/>
      <div className="card-body">
        <p className="card-title h6">
          {article.title}
        </p>
        <p className="card-text truncate">
          {article.description}
        </p>
        <hr/>
        <p className="card-text">
          <small className="text-muted">
            {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`} - fonte: {article.source.name}
          </small>
        </p>
        <Link
          to={{
            pathname: '/noticia',
            state: { article }
          }}
          className="stretched-link"
        />
      </div>
    </div>
  )
}
