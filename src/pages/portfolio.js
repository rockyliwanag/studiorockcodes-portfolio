import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions'
import Layout from '../components/layout'
import Video from '../components/video'

const Portfolio = () => {
  const siteTitle = 'StudioRock - Portfolio'
  const siteDescription = 'Rocky Liwanag | Software Developer | Graphic Artist'
  const categories = [
    {
      id: 1,
      name: 'Web Development',
      image: '/webdev.mp4',
      background: '/webdev.mp4',
      link: '/portfolio/webdev',
    },
    {
      id: 2,
      name: 'Graphic Design',
      image: '/design.mp4',
      background: '/design.mp4',
      link: '/portfolio/design',
    },
    {
      id: 3,
      name: 'Content Creation',
      image: '/content.mp4',
      background: '/content.mp4',
      link: '/portfolio/content',
    },
  ]

  return (
    <Layout>
      <PageTransition>
      <Helmet>
        <title> {siteTitle} </title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <div className="main">
        <h1>My Portfolio</h1>
        <p>I have categorized my portfolio to 3 of the services I can provide, based on my skillset. Web Development, Graphic Design, and Content Creation. A blend of the 3 can culminate into 1 quality application. </p>
        <section id="container-wrapper">
          {categories.map((c) => (
            <Link to={c.link} key={c.id} className="category-container">
                <Video src={c.background} />
                <div className="video-overlay"></div>
              <div className="category-title">{c.name}</div>
              
            </Link>
          ))}
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

export default Portfolio;