import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark red darken-3 sticky-top">

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content">
        <span className="navbar-toggler-icon"></span>
      </button>

      <span className="navbar-brand h1">Maxx notícias</span>

      <div className="collapse navbar-collapse" id="nav-content">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="./contact" className="nav-link">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
