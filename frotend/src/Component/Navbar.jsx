import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
 const Navbar=()=>{
    return(<>
<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
  <div className="container-fluid">
    {/* Main Navbar (Brand and Menu) */}
    <a className="navbar-brand" href="#">StudioX Photography</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto custom-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/galleries">GALLERIES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">BLOG</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
    {/* Social Icons on the Right Side */}
    <div className="d-flex justify-content-end">
      <a href="https://www.instagram.com" className="navbar-brand mx-2" target="_blank">
        <i className="fab fa-instagram fa-lg" />
      </a>
      <a href="https://www.twitter.com" className="navbar-brand mx-2" target="_blank">
        <i className="fab fa-twitter fa-lg" />
      </a>
      <a href="https://www.linkedin.com" className="navbar-brand mx-2" target="_blank">
        <i className="fab fa-linkedin fa-lg" />
      </a>
    </div>
  </div>
</nav>

      </>
      )

 }
 export default Navbar