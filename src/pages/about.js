import React from 'react'
import Helmet from 'react-helmet'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import downloadFile from '../downloads/Rocky-Resume.pdf'

export default () => {
  const siteTitle = 'StudioRock - Portfolio'
  const siteDescription = 'Rocky Liwanag | Software Developer | Graphic Artist'
  return (
    <Layout>
      <Helmet>
        <title> {siteTitle} </title>{' '}
        <meta name="description" content={siteDescription} />{' '}
      </Helmet>{' '}
      <div className="main">
        <h2> Hello again! </h2> <p> This is more about myself! </p>
        <a href={downloadFile} download>
          Download Resume
        </a>
        {` `}
      </div>
    </Layout>
  )
}
