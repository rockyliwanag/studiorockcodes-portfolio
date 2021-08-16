import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Gallery from '../Gallery'


const Shirts = () => {
  const { allMdx } = useStaticQuery(
    graphql`query IndexQueryShirtGallery {
  allMdx(filter: {frontmatter: {category: {eq: "shirt"}}}) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date
          category
          images {
            source {
              childImageSharp {
                gatsbyImageData(width: 600, layout: CONSTRAINED)
              }
            }
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 300, layout: CONSTRAINED)
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
  
  
  return allMdx.edges.map(({ node }, i) => (
    <article key={i}>
      <Gallery images ={
        node.frontmatter.images.map(({
          id,
          source,
          thumbnail
        }) => ({
          id,
          source: source.childImageSharp.gatsbyImageData.images.fallback.src,
          thumbnail: thumbnail.childImageSharp.gatsbyImageData.images.fallback.src
        }))
      } />
    </article>
  ));
}

export default Shirts