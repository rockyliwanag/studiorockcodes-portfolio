import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="/" className="image avatar">
        <img src={avatar} alt="" />
      </a>{' '}
      <h1>
        <strong> I am Rocky </strong>, a graphic designer <br />
        turned software developer. <br />
        studiorock is my digital playground.{' '}
      </h1>{' '}
    </div>{' '}
    <Footer />
  </header>
)

export default Header
