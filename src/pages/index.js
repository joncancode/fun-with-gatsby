import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => {
 // const { edges: posts } = data.allMarkdownRemark
    return (
      <div>

<div style={{ color: `blue` }}>
   <h1>Hello Gatsby!</h1>
 </div>

    <div>
      <Link to="/page-2/">Link</Link>
    </div>
    <div>
      <Link to="/counter/">Counter</Link>
    </div>

        {/* {posts.map(({node: post}) => {
          const { frontmatter } = post

          return(
            <div>
              <h2>
                <Link to={frontmatter.path}>
                {frontmatter.title}
                </Link>
              </h2>
              <p>{frontmatter.date}</p>
              <p>{frontmatter.excerpt}</p>
            </div>
          )
        })} */}
      </div>
    )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount 
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default IndexPage
