import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Webdesigns = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query IndexQueryWebdesign {
        site {
          siteMetadata {
            title
          }
        }
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { category: { eq: "Webdesign" } } }
        ) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "DD MMMM, YYYY")
                title
                category
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 600) {
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

  return allMdx.edges.map(({ node }) => (
    <article key={node.id}>
      <Link to={node.fields.slug}>
        <div className="card-container">
          <Img
            className="card-image"
            fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
          />
          <div id="project-entry">
            <h3> {node.frontmatter.title} </h3>
            <p> {node.frontmatter.date} </p>
          </div>
        </div>
      </Link>
    </article>
  ))
}

export default Webdesigns