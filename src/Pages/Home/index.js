import React, { useState, useEffect } from 'react'
import newsapi from '../../services/newsapi'

import Card from '../../components/Card'

export default function Home() {
  useEffect(() => {
    newsapi.get('v2/top-headlines?country=br', {headers: {
      Authorization: 'Bearer c3c60717331c45199560a5d301b00d1b'
    }})
      .then(response => {
        if (response.data && response.data.articles)
          setNews(response.data.articles)
          console.log(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  const [news, setNews] = useState([])

  return (
    <div className="container my-5">
      <div className="card-columns">
        {news.map((article, id) => (
          <Card
            key={id}
            title={article.title}
            image={article.urlToImage}
            description={article.description}
            publishedAt={article.publishedAt}
            source={article.source.name}
            article={article}
          />
        ))}
        <Card
          title="Marvel"
          image="./assets/img/noticias/00.jpeg"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sunt expedita commodi eius repellat odio id atque facilis quas, sapiente molestias magni, tempore voluptate obcaecati accusamus incidunt ut illum iusto?"
          publishedAt="2019-11-15T20:02:00Z"
          source="Maxx notícias"
        />
      </div>
    </div>
  )
}
