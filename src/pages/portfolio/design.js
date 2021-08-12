import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions'
import Layout from '../../components/layout'
import Logo from '../../components/portfolio/Logos'
import Designs from '../../components/portfolio/Designs'
import Animations from '../../components/portfolio/Animations'


const Design = () => {
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
          <h2>Logos</h2>
          <p>
            These were projects that I made during my General Assembly's
            Software Engineering bootcamp.
          </p>
          <div id="categories">
            <Logo />
          </div>
        </section>
        <section>
          <h2>Animations</h2>
          <p>
            Here are some example of animations using css and svg.
          </p>
          <div id="categories">
            <Animations />
          </div>
        </section>
        <section>
          <h2>Shirt Designs</h2>
          <p>
            Here are some T-shirt designs that I get commissioned from West Kings clothing.
          </p>
          <div id="categories">
            <Designs />
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

export default Design;