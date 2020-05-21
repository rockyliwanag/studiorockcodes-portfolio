import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Webdesigns = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          filter: { frontmatter: { category: { eq: "Webdesign" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              id
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                category
              }
            }
          }
        }
      }
    `
  )

  return allMarkdownRemark.edges.map(({ node }) => (
    <article key={node.id}>
      <Link to={node.fields.slug}>
        <ul>
          <li>
            <div id="project-entry">
              {/* <Img fluid={node.frontmatter.childImageSharp.fluid} /> */}
              {/* <img src={node.frontmatter.path} alt="" /> */}
              <h3> {node.frontmatter.title} </h3>
              <p> {node.frontmatter.date} </p>
            </div>
          </li>
        </ul>
      </Link>
    </article>
  ))
}

export default Webdesigns
