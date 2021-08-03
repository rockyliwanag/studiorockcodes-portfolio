import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions'
import Layout from '../components/layout'
import Video from '../components/video'

export default () => {
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

        <section id="container-wrapper">
          {categories.map((c) => (
            <Link to={c.link} key={c.id} className="category-container">
                <Video src={c.background} />
                <div className="video-overlay"></div>
              <div className="category-title">{c.name}</div>
              
            </Link>
          ))}
        </section>
      </div>
    </PageTransition>
    </Layout>
  )
}
