import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Development from '../components/Development'
import Designs from '../components/Designs'
import Logos from '../components/Logos'
import Webdesigns from '../components/Webdesigns'

export default () => {
  const siteTitle = 'StudioRock - Portfolio'
  const siteDescription = 'Rocky Liwanag | Software Developer | Graphic Artist'

  return (
    <Layout>
      <Helmet>
        <title> {siteTitle} </title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <div className="main">
        <h1>My Portfolio</h1>
        <section id="one">
          <h2> Web Development Projects </h2>
          <p>
            Here are some of the projects I have programmed myself. I wireframed
            each with Sketch, then prototyped with InVision, I managed them with
            Trello, wrote the code on VS Code, and then deployed on Heroku.
          </p>
          <Development />
        </section>
        <section id="two">
          <h2> Web Design - UX/UI Projects </h2>
          <p> These are some of the projects I have created. </p>
          <Webdesigns />
        </section>
        {/* <section id="three">
          <h2> Logo Projects </h2>
          <p> These are projects that I have designed </p>
          <Logos />
        </section>
        <section id="four">
          <h2> Graphic Design Projects </h2>
          <p> These are some of the projects I have created. </p>
          <Designs />
        </section> */}
        <hr />
        <Link to="/message" className="button">
          Contact Me
        </Link>
      </div>
    </Layout>
  )
}
