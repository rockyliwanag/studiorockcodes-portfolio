import React from 'react'
import Helmet from 'react-helmet'
import PageTransition from 'gatsby-plugin-page-transitions'
import Layout from '../components/layout'
import Contact from '../components/Contact'

const Message = () => {
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
          <section className="full">
            <h1> Get In Touch </h1>
            <p>
              Yes.Please keep in touch.You can send me a message, and I will
              reply as promptly as possible.I would love to answer any question
              you may have about my work.Have a blessed day!
            </p>
            <Contact />
          </section>
        </div>
      </div>
      </PageTransition>
    </Layout>
  )
}

export default Message;