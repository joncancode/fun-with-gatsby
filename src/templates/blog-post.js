import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Template = ({data, location, pathContext}) => {
    const {markdownRemark: post} = data
    // ^^ same as const post = data.markdownRemark 
    const {frontmatter, html} = post
    const { title, date } = frontmatter
    const {prev, next} = pathContext

    return (
        <div>
            <Helmet title={`${title} - Test Blog`} />

            <div>
                <h1>{title}</h1>
                <h4>{date}</h4>
                <div dangerouslySetInnerHTML={{__html: html}} />
           
           <p>
               {prev && (
                   <Link to={prev.frontmatter.path}>
                    Previous: {prev.frontmatter.title}
                    </Link>
               )}
            </p>
            <p>
               {next && (
                   <Link to={next.frontmatter.path}>
                    Next: {next.frontmatter.title}
                    </Link>
               )}
            </p>
            </div>
        </div>
    )
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: { eq: $path}}) {
            html
            frontmatter {
                title
                date(formatString: "MM.DD.YYYY")
                path
                tags
                excerpt
            }
        }
    }
`

export default Template
