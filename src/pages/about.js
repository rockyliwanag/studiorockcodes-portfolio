import React from 'react'
import Helmet from 'react-helmet'
import PageTransition from 'gatsby-plugin-page-transitions'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import downloadFile from '../downloads/Rocky-Resume.pdf'
import resume from '../assets/images/Rocky-Resume.jpg'

const About = () => {
  const siteTitle = 'StudioRock - Portfolio'
  const siteDescription = 'Rocky Liwanag | Software Developer | Graphic Artist'
  return (
    <Layout>
      <PageTransition>
      <Helmet>
        <title> {siteTitle} </title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <div className="alternate">
        <div className="main">
          <h1 className="heading1"> More About Myself </h1>
          <p>
            I am Rocky, a graphic designer turned software developer. Like most
            creative developers, it was a natural progression to go from being a
            graphic artist to learning how to code. I have always had the
            interest, and was an early adopter of technology. My first exposure
            to pixels were on an MS - Paint program, pre Windows 95 version.{' '}
            <br />
            <br />
            Finishing a Bachelor 's degree in Marketing/Advertising at APC,
            Philippines; I learned how valuable design is.It has always
            fascinated me how effective a good design can be, targeted at the
            right audience; And how local mom and pop brands break into becoming
            global brands. <br />
            <br />
            Having those concepts in mind, at the same time building my
            technical skillset, my goal is to create compelling designs and
            brands in the digital space.
          </p>
          <ul className="actions">
            <li>
              <a className="button" href={downloadFile} download>
                Download Resume
              </a>
            </li>
          </ul>
          <div>
            <img src={resume} alt="" />
          </div>
        </div>
      </div>
      </PageTransition>
    </Layout>
  )
}

export default About;