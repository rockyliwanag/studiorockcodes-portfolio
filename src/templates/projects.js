import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="main">
        <Link to="/portfolio">
          <div className="icon fa-arrow-left">&nbsp;Portfolio</div>
        </Link>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
  }
`
