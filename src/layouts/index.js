import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <div
    style={{
      background: 'white',
      marginBottom: '1rem',
      borderBottom: '3px solid #6abaef',
      maxWidth: '90%',
      margin: 'auto'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link className="page-title"
          to="/"
          style={{
            color: '#fcc29a',
            textDecoration: 'none',
          }}
        >
          Jon's Blog
        </Link>
      </h1>
      <div>
      <Link to="/counter">
          counter 
      </Link>
      </div>
      <div>
      <Link to="/blog">
          blog 
      </Link>
      </div>
      <div>
      <Link to="/about">
          about
      </Link>
      </div>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Jon's Blog"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 40,

      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
