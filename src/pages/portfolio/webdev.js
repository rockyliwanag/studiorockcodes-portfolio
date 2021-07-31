import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import GA from '../../components/GA'
import Ecommerce from '../../components/Ecommerce'

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
        <Link to="/portfolio">
          <div className="icon fa-arrow-left">&nbsp;Portfolio</div>
        </Link>
        <h1>Web Development</h1>
        <h4>Lorem ipsum dolor al cabron</h4>
        <section>
          <h2>E-commerce</h2>
          <h6>
            These were projects that I made during my General Assembly's
            Software Engineering bootcamp.
          </h6>
          <div id="categories">
            <Ecommerce />
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
    </Layout>
  )
}
