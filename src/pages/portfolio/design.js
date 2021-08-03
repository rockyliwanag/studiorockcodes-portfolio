import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions'
import Layout from '../../components/layout'
import GA from '../../components/portfolio/GA'
import Logo from '../../components/portfolio/Logos'


export default () => {
  const siteTitle = 'StudioRock - Portfolio'
  const siteDescription = 'Rocky Liwanag | Software Developer | Graphic Artist'

  return (
    <Layout>
        <PageTransition>
      <Helmet>
        <title> {siteTitle} </title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <div className="main">
        <Link to="/portfolio">
          <div className="icon fa-arrow-left">&nbsp;Portfolio</div>
        </Link>
        <h1>Graphic Design</h1>
        <h4>Lorem ipsum dolor al cabron</h4>
        <section>
          <h1>Logos</h1>
          <h6>
            These were projects that I made during my General Assembly's
            Software Engineering bootcamp.
          </h6>
          <div id="categories">
            <Logo />
          </div>
        </section>
        <section>
          <h2>General Assembly Bootcamp Projects</h2>
          <h6>
            These were projects that I made during my General Assembly's
            Software Engineering bootcamp.
          </h6>
          <div id="categories">
            <GA />
          </div>
        </section>

        <hr />
        <Link to="/message" className="button">
          Contact Me
        </Link>
      </div>
      </PageTransition>
    </Layout>
  )
}
