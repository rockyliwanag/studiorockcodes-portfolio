import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

const Webdesigns = () => {
  const { allMdx } = useStaticQuery(
    graphql`query IndexQueryWebdesign {
  site {
    siteMetadata {
      title
    }
  }
  allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {frontmatter: {category: {eq: "Webdesign"}}}
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
    <article key={node.id}>
      <Link to={node.fields.slug}>
        <div className="card-container">
          <GatsbyImage
            image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
            className="card-image" />
          <div id="project-entry">
            <h3> {node.frontmatter.title} </h3>
            <p> {node.frontmatter.date} </p>
          </div>
        </div>
      </Link>
    </article>
  ));
}

export default Webdesigns
