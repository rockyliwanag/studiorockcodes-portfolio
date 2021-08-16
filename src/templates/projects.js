import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import Layout from '../components/layout'
import { GatsbyImage } from "gatsby-plugin-image";

const Projects = ({ data }) => {
  let post = data.mdx
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.gatsbyImageData
  let images = post.frontmatter.carousel
  return (
    <Layout>
        <div className="main" key={post.id}>
          <Link to={`/portfolio/${post.frontmatter.type}`}>
            <div className="icon fa-arrow-left">
              &nbsp;{`Portfolio / ${post.frontmatter.page}`}
            </div>
          </Link>
          <h1>{post.frontmatter.title}</h1>
          { !images ? <GatsbyImage image={featuredImgFluid} alt="" /> : 

          <div>
            <Carousel infiniteLoop autoPlay interval='5000' showThumbs={false}>
            {images.map(({id, source}) => (
                <div key={id}>
                  <GatsbyImage image={source.childImageSharp.gatsbyImageData} alt="" />
                </div>
              ))}
            </Carousel>
          </div>
          }
          
          <br />
          <br />
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
    </Layout>
  );
}

export const query = graphql`query ($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    frontmatter {
      title
      type
      category
      page
      featuredImage {
        childImageSharp {
          gatsbyImageData(width: 800, layout: CONSTRAINED)
        }
      }
      carousel {
        id
        source {
          childImageSharp {
            gatsbyImageData(width: 800, layout: CONSTRAINED)
          }
        }
      }
    }
  }
}
`

export default Projects;