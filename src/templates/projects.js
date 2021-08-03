import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

export default ({ data }) => {
  let post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <div className="alternate" key={post.id}>
        <div className="main">
          <Link to={`/portfolio/${post.frontmatter.type}`}>
            <div className="icon fa-arrow-left">
              &nbsp;{`Portfolio / ${post.frontmatter.page}`}
            </div>
          </Link>
          <h1>{post.frontmatter.title}</h1>
          <Img fluid={featuredImgFluid} />
          <br />
          <br />
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        type
        category
        page
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
`
