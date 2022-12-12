import { Link } from "react-router-dom"

import './Menu.css'

export function Menu(){


    return(
      <nav className="navbar navbar-expand-lg menu navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Heroes del Silencio</Link>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="historia">Historia</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="integrantes">Integrantes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="albums">Albums</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="music">Music</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="mercancias">Mercancias</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    )

}