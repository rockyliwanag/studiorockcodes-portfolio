import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

const Designs = () => {
  const { allMdx } = useStaticQuery(
    graphql`query IndexQueryDesign {
  site {
    siteMetadata {
      title
    }
  }
  allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {frontmatter: {category: {eq: "shirt"}}}
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
            id
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 600, layout: CONSTRAINED)
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
    <article key={node.frontmatter.logo.id}>
      <Link to={node.fields.slug}>
        <div className="category-icon">
          <GatsbyImage
            image={node.frontmatter.logo.childImageSharp.gatsbyImageData}
            alt={node.frontmatter.title}
            className="card-image" />
          <div id="title">
            <h3> {node.frontmatter.title} </h3>
          </div>
        </div>
      </Link>
    </article>
  ));
}

export default Designs
