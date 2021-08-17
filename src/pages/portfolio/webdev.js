import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions'
import Layout from '../../components/layout'
import Ga from '../../components/portfolio/GA'
import Ecommerce from '../../components/portfolio/Ecommerce'
import Webflow from '../../components/portfolio/Webflow'


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
        <p>My first venture and interest into web development started in 2010, with creating mock-ups on photoshop and turning it into a website using Wix,
           when it still used flash as its platform. As I did more Graphic Design, I did not get into programming until as recent as 3 years ago. Seeing how 
           much web technology has changed my environment, it inspired me to learn how to code and so I joined General Assembly's Software Engineering bootcamp and finished April 2020.
           <br/>
           <br/> 
           Listed below are professional and personal projects I have 'made || worked' on. Other than design, web development is where I focus most of my time and attention to.</p>
        <section>
          <h2>E-commerce</h2>
          <p>
            These are some projects I have done implemnting shopping carts, and user accounts.
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
        <section>
          <h2>Webflow</h2>
          <p>
            Prior to learning how to code,  I would  use sites like Webflow, Wix, or SquareSpace to create websites.
          </p>
          <div id="categories">
            <Webflow />
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