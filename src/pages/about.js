import React from 'react'
import Helmet from 'react-helmet'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import downloadFile from '../downloads/Rocky-Resume.pdf'
import resume from '../assets/images/resume-image.jpg'

export default () => {
  const siteTitle = 'StudioRock - Portfolio'
  const siteDescription = 'Rocky Liwanag | Software Developer | Graphic Artist'
  return (
    <Layout>
      <Helmet>
        <title> {siteTitle} </title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <div className="about">
        <div className="main">
          <h2> Hello again! </h2>{' '}
          <p>
            I am Rocky , a graphic designer turned software developer. Like most
            creative developers, it was a natural progression to go from being a
            graphic artist to learning how to code. I was born in the era of
            NES, Powerglove, and playing Track n Field on a Power Pad. My first
            exposure to pixels were on a MS-Paint program, pre Windows 95.
            <br />
            <br />
            Finishing a Bachelor's degree on Marketing/Advertising, I learned
            how valuable design is.
          </p>
          <a href={downloadFile} download>
            Download Resume
          </a>
          <div>
            <img src={resume} alt="" />
          </div>
        </div>
      </div>
    </Layout>
  )
}
