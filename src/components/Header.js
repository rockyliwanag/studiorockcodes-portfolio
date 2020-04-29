import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import { Link } from 'gatsby'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="/" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong> I am Rocky </strong>, a graphic designer <br />
        turned software developer. <br />
        studiorock is my digital playground.
      </h1>
    </div>
    <div className="links">
      <ul>
        <li>
          <Link activeClassName="navItemActive" to="/">
            <h3>Home</h3>
          </Link>
        </li>
        <li>
          <Link activeClassName="navItemActive" to="/about">
            <h3>About</h3>
          </Link>
        </li>
        <li>
          <Link activeClassName="navItemActive" to="/portfolio">
            <h3>Portfolio</h3>
          </Link>
        </li>
        <li>
          <Link activeClassName="navItemActive" to="/message">
            <h3>Message</h3>
          </Link>
        </li>
      </ul>
    </div>
    <Footer />
  </header>
)

export default Header
