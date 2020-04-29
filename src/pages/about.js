import React from 'react'
import Helmet from 'react-helmet'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import downloadFile from '../downloads/Rocky-Resume.pdf'
import resume from '../assets/images/Rocky-Resume.jpg'

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
            graphic artist to learning how to code. I have always had the
            interest, and was an early adopter of technology. My era was in the
            days of NES, Powerglove, and playing Track n Field on a Power Pad.
            My first exposure to pixels were on an MS-Paint program, pre Windows
            95 version.
            <br />
            <br />
            Finishing a Bachelor's degree in Marketing/Advertising at APC,
            Philippines; I learned how valuable design is. It has fascinated me
            how effective a good design can get, targeted at the right audience.
            And how local mom and pop brands break into becoming global brands.
            <br />
            <br />
            Having these in mind, and building my technical skillset, my goal is
            to create compelling designs and brands in the digital space.
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
