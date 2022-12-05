import { Link } from "react-router-dom"

import './Menu.css'

export function Menu(){


    return(
      <nav class="navbar navbar-expand-lg menu navbar-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">Heroes del Silencio</Link>
          
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="historia">Historia</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="integrantes">Integrantes</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="albums">Albums</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="music">Music</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    )

}