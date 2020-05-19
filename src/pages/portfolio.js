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
        <h2> Web Development Projects </h2>
        <p> These are some of the projects I have developed. </p>
        <Development />
        <h2> Web Design - UX/UI Projects </h2>
        <p> These are some of the projects I have created. </p>
        <Designs />
        <h2> Logo Projects </h2>
        <p> These are some of the projects I have created. </p>
        <Logos />
        <h2> Graphic Design Projects </h2>
        <p> These are some of the projects I have created. </p>
        <Webdesigns />
        <Link to="/message"> Contact Me </Link>
      </div>
    </Layout>
  )
}
