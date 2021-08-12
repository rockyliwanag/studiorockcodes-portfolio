import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Ga = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query IndexQueryDevelop {
        site {
          siteMetadata {
            title
          }
        }
        allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          filter: { frontmatter: { category: { eq: "webdev" } } }
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
                logo {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
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
        <div className='category-icon'>
          <Img
            className="card-image"
            fluid={node.frontmatter.logo.childImageSharp.fluid}
          />
          <div className='title'>
            <h3> {node.frontmatter.title} </h3>
          </div>
        </div>
      </Link>
    </article>
  ))
}

export default Ga
