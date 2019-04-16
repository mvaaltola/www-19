import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}>
            <h3>{node.frontmatter.title}{" - "}<span>{node.frontmatter.date}</span></h3>
          </Link>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
          }
          excerpt
          html
          fields {
            slug
          }
        }
      }
    }
  }
`
