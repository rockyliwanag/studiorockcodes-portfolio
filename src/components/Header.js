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
    <div>
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/about">
        <h3>About</h3>
      </Link>
      <Link to="/portfolio">
        <h3>Portfolio</h3>
      </Link>
      <Link to="/message">
        <h3>Message</h3>
      </Link>
    </div>
    <Footer />
  </header>
)

export default Header
