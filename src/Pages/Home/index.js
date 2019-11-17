import React, { useState, useEffect } from 'react'
import newsapi from '../../services/newsapi'

import Card from '../../components/Card'

export default function Home() {
  useEffect(() => {
    setAlert('carregando...')
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
      .finally(setAlert(''))
  }, [])

  const [news, setNews] = useState([])
  const [alert, setAlert] = useState('carregando')
  const [loading, setLoading] = useState(true)

  return (
    <div className="container my-5">
      {loading && (
        <p className="text-center">Carregando...</p>
      )}
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
          article={{
            author: "Gabriel Mendes",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu odio accumsan, hendrerit eros nec, finibus leo. Fusce nec mollis turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent maximus risus non libero gravida euismod vitae non est. Vivamus vel lacinia mauris, vitae finibus nisi. Donec maximus purus quis massa interdum, non tincidunt mauris semper. Curabitur sit amet augue ut elit maximus volutpat. Vestibulum nec odio risus. Vivamus consequat varius ex at congue. Pellentesque nibh quam, consequat eu erat et, lobortis condimentum velit. Duis eget lectus cursus, interdum augue nec, suscipit tortor. Integer ut ornare sapien. Vivamus imperdiet orci eget lacinia ornare.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sunt expedita commodi eius repellat odio id atque facilis quas, sapiente molestias magni, tempore voluptate obcaecati accusamus incidunt ut illum iusto?",
            publishedAt: "2019-11-15T20:02:00Z",
            source: {
              id: null,
              name: "Gabriel Mendes",
            },
            title: "Marvel",
            url: "#",
            urlToImage: "./assets/img/noticias/00.jpeg",
          }}
        />
      </div>
      {alert > 0 && (
        <div className="text-center mt-5">
          <p>{alert}</p>
        </div>
      )}
    </div>
  )
}
