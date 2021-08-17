import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Gallery from '../Gallery'


const Ah = () => {
  const { allMdx } = useStaticQuery(
    graphql`query IndexQueryInstapassGallery {
  allMdx(filter: {frontmatter: {category: {eq: "ecommerce"}, title: {eq: "Instapass"}}}) {
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
            id
            source {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 300, placeholder: BLURRED, layout: CONSTRAINED)
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

export default Ah