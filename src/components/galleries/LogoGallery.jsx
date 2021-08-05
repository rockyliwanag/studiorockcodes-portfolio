import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Gallery from '../../components/Gallery'


const Logos = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query IndexQueryLogoGallery {
        allMdx(filter: {frontmatter: {category: {eq: "logo"}}}) {
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
                    caption
                    description
                    source {
                    childImageSharp {
                        fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                    }
                    thumbnail {
                    childImageSharp {
                        fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                        }
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
        <div >
            <Gallery images={node.frontmatter.images.map(({
                id, 
                source, 
                thumbnail, 
                caption,
                description
                }) =>
                    // key=el.id,
                    ({id,
                   source:source.childImageSharp.fluid.src,
                    thumbnail:thumbnail.childImageSharp.fluid.src,
                    caption,
                    description
                    })
              )}/>
          
            
    
        </div>
    </article>
  ))
}

export default Logos
