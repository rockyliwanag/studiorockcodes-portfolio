import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
// import Img from 'gatsby-image'

const Development = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query IndexQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { category: { eq: "Develop" } } }
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

export default Development

// featuredImage {
//   childImageSharp {
//     fluid(maxWidth: 800) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
