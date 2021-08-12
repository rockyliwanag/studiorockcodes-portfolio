import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions'
import Layout from '../../components/layout'
import Ga from '../../components/portfolio/GA'
import Ecommerce from '../../components/portfolio/Ecommerce'


const Webdev = () => {
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
        <h1>Web Development</h1>
        <p>Listed below are professional and personal projects I have 'made || worked' on. Other than design, web development is where I focus most of my time and attention to.</p>
        <section>
          <h2>E-commerce</h2>
          <p>
            These were projects that I made during my General Assembly's
            Software Engineering bootcamp.
          </p>
          <div id="categories">
            <Ecommerce />
          </div>
        </section>
        <section>
          <h2>General Assembly Bootcamp Projects</h2>
          <p>
            These were projects that I made during my General Assembly's
            Software Engineering bootcamp.
          </p>
          <div id="categories">
            <Ga />
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

export default Webdev;