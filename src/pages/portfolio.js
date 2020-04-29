import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'

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
        <Link to="/">
          <div className="icon fa-arrow-left">&nbsp;BACK</div>
        </Link>
        <h2> Portfolio Page! </h2> <p> This is a portfolio page. </p>
        <Link to="/message"> Contact Me </Link>
      </div>
    </Layout>
  )
}
