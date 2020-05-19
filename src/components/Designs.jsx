import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Designs = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: ASC }
          filter: { frontmatter: { category: { eq: "Design" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              id
              frontmatter {
                title
                date
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
        <div id="project-entry">
          {/* <img src={node.frontmatter.featuredImage} alt="" />{' '} */}
          <h3> {node.frontmatter.title}</h3>
          <p> {node.frontmatter.date} </p>
        </div>
      </Link>
    </article>
  ))
}

export default Designs
