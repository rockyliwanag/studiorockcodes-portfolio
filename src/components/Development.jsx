import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Development = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: ASC }
          filter: { frontmatter: { category: { eq: "Develop" } } }
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
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
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
          <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
          <h3> {node.frontmatter.title}</h3>
          <p> {node.frontmatter.date} </p>
        </div>
      </Link>
    </article>
  ))
}

export default Development
