import React, { useState, useEffect } from 'react'
import newsapi from '../../services/newsapi'
import data from '../../data/data'

import Card from '../../components/Card'

export default function Home() {
  useEffect(() => {
    try {
      newsapi.get('v2/top-headlines?country=br', {headers: {
        Authorization: 'Bearer c3c60717331c45199560a5d301b00d1b'
      }})
        .then(response => {
          if (response.data && response.data.articles)
            setNews(response.data.articles)
            setLoading(false)
            console.log(response.data)
        })
        .catch(error => {
          setAlert('Não foi possível carregar mais notícias.')
          setLoading(false)
        })
    } catch (error) {
      setAlert('Não foi possível carregar mais notícias.')
    }
  }, [])

  const [news, setNews] = useState([])
  const [alert, setAlert] = useState('')
  const [loading, setLoading] = useState(true)

  return (
    <div className="container my-5">
      {loading && (
        <>
          <div className="d-flex justify-content-center align-items-center">

            <div className="spinner-grow spinner-grow-sm mx-2 red darken-3" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm mx-2 red darken-3 fast" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm mx-2 red darken-3" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </>
      )}
      <div className="card-columns">
        {data.articles.map((article, id) => (
          <Card key={id} article={article} />
        ))}
        {news.map((article, id) => (
          <Card
            key={id}
            article={article}
          />
        ))}
      </div>
      {(!loading && alert) && (
        <div className="text-center mt-5">
          <p>{alert}</p>
        </div>
      )}
    </div>
  )
}
