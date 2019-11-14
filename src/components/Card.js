import React from 'react'

export default function Card({ title, image }) {
  return (
    <div className="card my-4 mx-3 card-noticia" style={{width: '16 rem'}}>
      <img className="card-img-top" src={image} alt=""/>
      <div className="card-body">
        <p className="card-title h6">
          {title}
        </p>
        <p className="card-text truncate">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos praesentium tempore sequi illum rem eius. Vel deleniti, veniam labore suscipit sit iure nulla quam harum, ab, minima enim iste tempore.
        </p>
        <hr/>
        <p className="card-text"><small className="text-muted">14/11/2019</small></p>
        <span><a className="stretched-link" href="./noticia"></a></span>
      </div>
    </div>
  )
}
