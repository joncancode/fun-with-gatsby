import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => {
  const { edges: posts } = data.allMarkdownRemark
    return (
      <div>
         {posts.map(({node: post}) => {
           console.log('po', post)
           console.log('po date', post.frontmatter)
          const { frontmatter } = post
          return(
            <div>
              
              <h2 className="page-title">
                <Link className="blog-title" to={frontmatter.path}>
                {frontmatter.title}
                </Link>
              </h2>
              <p>{frontmatter.date}</p>
              <p>{frontmatter.excerpt}</p>
              <ul>
                {post.frontmatter.tags.map(tag => {
                  return(
                    <li>
                      <Link to={`/tags/${tag}`}>
                      {tag}
                      </Link>
                      </li>
                  )
                })
                }
              </ul>
            </div>
          )
        })}
      </div>
    )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
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