import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

export default () => {
  const siteTitle = 'StudioRock - Portfolio'
  const siteDescription = 'Rocky Liwanag | Software Developer | Graphic Artist'
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
          edges {
            node {
              fields {
                slug
              }
              id
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    `
  )
  const projects = allMarkdownRemark.edges.map(({ node }) => (
    <article key={node.id}>
      <Link to={node.fields.slug}>
        <div id="project-entry">
          <h3>{node.frontmatter.title}</h3>
          <p>{node.frontmatter.date}</p>
        </div>
      </Link>
    </article>
  ))
  return (
    <Layout>
      <Helmet>
        <title> {siteTitle} </title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <div className="main">
        {/* <Link to="/">
          <div className="icon fa-arrow-left">&nbsp;BACK</div>
        </Link> */}
        <h2> Portfolio Page! </h2> <p> This is a portfolio page. </p>
        {projects}
        <Link to="/message"> Contact Me </Link>
      </div>
    </Layout>
  )
}
