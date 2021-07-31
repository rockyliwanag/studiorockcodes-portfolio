import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default () => {
  const siteTitle = 'StudioRock - Portfolio'
  const siteDescription = 'Rocky Liwanag | Software Developer | Graphic Artist'
  const categories = [
    {
      id: 1,
      name: 'Web Development',
      image: '',
      link: '/portfolio/webdev',
    },
    {
      id: 2,
      name: 'Graphic Design',
      image: '',
      link: '/portfolio/design',
    },
    {
      id: 3,
      name: 'Content Creation',
      image: '',
      link: '/portfolio/content',
    },
  ]

  return (
    <Layout>
      <Helmet>
        <title> {siteTitle} </title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <div className="main">
        <h1>My Portfolio</h1>

        <section id="container-wrapper">
          {categories.map((c) => (
            <Link to={c.link} key={c.id} className="category-container">
              <div className="category-icon-container"></div>
              <div className="category-title">{c.name}</div>
            </Link>
          ))}
        </section>
      </div>
    </Layout>
  )
}
