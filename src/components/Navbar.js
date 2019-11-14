import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light peach-gradient">

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content">
        <span className="navbar-toggler-icon"></span>
      </button>

      <span className="navbar-brand h1">Maxx</span>

      <div className="collapse navbar-collapse" id="nav-content">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
