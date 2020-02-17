import React from 'react'
import { A } from 'hookrouter'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <A className="navbar-brand" href="/">
        React Shuffler
      </A>
      <div className="container">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <A className="nav-link" href="/">
                Home
                <span className="sr-only">(current)</span>
              </A>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Shuffle
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <A className="dropdown-item" href="/api">
                  API Shuffle
                </A>
                <A className="dropdown-item" href="/socket">
                  Web Socket Shuffle
                </A>
              </div>
            </li>

            <li className="nav-item">
              <A className="nav-link" href="/about">
                About
              </A>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
