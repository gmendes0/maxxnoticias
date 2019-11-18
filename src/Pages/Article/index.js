import React from 'react'
import { Link } from 'react-router-dom'

export default function Article(props) {
  const published = (props.location && props.location.state && props.location.state.article) ? new Date(props.location.state.article.publishedAt) : ''
  return(
    <>
      <div className="container">
        {!(props.location && props.location.state && props.location.state.article) && (
          <div className="my-5 text-center" style={{height: '100vh'}}>
            <p className="h3">Notícia não encontrada</p>
            <Link className="mt-3" to='/'>Voltar para a página inicial</Link>
          </div>
        )}
        {(props.location && props.location.state && props.location.state.article) &&

          <div className="mt-5">
            
            <div className="row justify-content-center mt-3">
              <h1 className="px-5 font-weight-bold text-justify col-sm-10">{props.location.state.article.title}</h1>
            </div>

            <div className="row justify-content-center mt-3">
              <p className="text-justify px-5 h5 font-weight-normal col-sm-10">{props.location.state.article.description}</p>
            </div>
            <div className="row justify-content-center mt-4">
              <p className="h6 px-5 col-sm-10">por {props.location.state.article.author ? props.location.state.article.author : 'Desconhecido'}</p>
            </div>
            <div className="row justify-content-center mb-5">
              <small className="px-5 col-sm-10">publicado em: {`${published.getDate()}/${published.getMonth()}/${published.getFullYear()}`}</small>
            </div>

            <hr/>

            <img className="w-100 mt-3" src={props.location.state.article.urlToImage} alt=""/>

            <div className="px-5 py-2 mt-4">
                <p className="text-justify">
                  {props.location.state.article.content ? props.location.state.article.content.replace(/\[\+[0-9]{1,} chars\]/, `[Clique abaixo para continuar lendo.]`) : ''}
                </p>

                <p className="h6 font-weight-normal text-center">
                  <a className="btn btn-success" href={props.location.state.article.url}>Clique e veja a notícia completa</a>
                </p>
            </div>

            <hr className="mt-5 mb-3"/>
            <div className="row justify-content-center my-3">
              <div className="col-12">
                <div className="text-center">
                  <iframe src="//cdn.bannersnack.com/banners/bh90xlee9/embed/index.html?userId=40080996&t=1574092967"
                    width="100%"
                    height="100%"
                    scrolling="no"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="autoplay"
                    allowFullScreen={true}>
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}
