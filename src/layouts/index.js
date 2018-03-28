import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import medium from './images/medium.png'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import smile from './images/smile2.png'

import './index.css'

const styles = {
  body: {
    backgroundColor: 'white',
  },
  main: {
    maxWidth: '90%',
    margin: '0 auto',
  },
  container: {
    margin: '0 auto',
    maxWidth: 960,
  },
  pageTitle: {
    fontFamily: 'American Typewriter, serif',
    margin: 0,
    padding: '25px 0px 15px 0px'
  },
  pageName: {
    fontSize: 36,
    textShadow: '2.5px 2.5px 0 #6abaef',
    fontWeight: 'bold',
    color: '#13284a',
  },
  navGroup: {
    borderTop: '3px solid #ff7417',
    maxWidth: '90%',
    margin: '0 auto',
    padding: '15px 0px 20px 0px',
    textAlign: 'right'
  },
  navLinks: {
    color: '#6abaef',
    padding: '15px',
  },
  socialLinks: {
    // color: '#6abaef',
    padding: '15px',
  },
  posts: {
    backgroundColor: '#e5eeff',
    maxWidth: '85%',
    margin: '0 auto',
    padding: '50px',
    borderRadius: '2%'
  }
}

const Header = () => (
  <div
    style={styles.main}
  >
    <div
      style={styles.container}
    >
      <div style={styles.pageTitle}>
        <Link 
          to="/"
          style={styles.pageName}>
          Jonathan Haines
        </Link>
      </div>
      <span >
<a style={styles.socialLinks} target="_new" href="//facebook.com/jonathan.haines.3">
  <img className="social-group"  src={facebook} alt="logo-facebook" height="30" width="30"/>
</a>
<a style={styles.socialLinks} target="_new" href="//github.com/joncancode">
 <img className="social-group"  src={github} alt="logo-github" height="30" width="30"/> 
</a>
<a style={styles.socialLinks} target="_new" href="//instagram.com/_jonstagram_/">
 <img className="social-group"  src={instagram} alt="logo-instagram" height="30" width="30"/> 
</a>
<a style={styles.socialLinks} target="_new" href="//linkedin.com/in/jonathanhaines1/">
 <img className="social-group"  src={linkedin} alt="logo-linkedin" height="30" width="30"/> 
</a>
<a style={styles.socialLinks} target="_new" href="//medium.com/@jc.haines19/">
  <img className="social-group"  src={medium} alt="logo-medium" height="30" width="30"/>
</a>
      </span>
    
    </div>
  </div>
)

const Blog = () => (
      <div style={styles.navGroup}>
      <Link 
          className="nav-group"
          to="/"
          style={styles.navLinks}>
          about
        </Link>
      {/* <Link to="/counter" 
          style={styles.navLinks}>
          counter    
      </Link> */}
      <Link 
          className="nav-group"
          to="/projects"
          style={styles.navLinks}>
          projects 
      </Link>

      <Link 
          className="nav-group"
          to="/blogposts"
          style={styles.navLinks}>
          blog 
      </Link>
      {/* <Link 
          className="nav-group"
          to="/blog"
          style={styles.navLinks}>
          blog
      </Link> */}
      </div>
)

const Footer = () => (
  <div style={{ 
                backgroundColor: '#6abaef', 
                width: '100%',
                bottom: '0px',
                height: '10%',
                borderTop: '3px solid #ff7417',
                marginTop: '50px'
                }}>
    <p style={{textAlign: 'right', marginRight: '35px', fontSize: '14px', paddingTop: '10px'}}>© Jonathan Haines 2018 
    <br/>this page was created with <a className="bot-link" href="https://reactjs.org/">React </a> 
     and <a className="bot-link" href="https://www.gatsbyjs.org/">GatsbyJS</a></p>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div style={styles.body}>
    <Helmet 
      title="Jonathan Haines"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      // link rel="icon" type="image/png" href={smile} sizes="32x32"
      // link rel="icon" type="image/png" href={smile} sizes="16x16"
      />
    <Header />
    <Blog />
    <div
      style={styles.container}
    >
    <div style={styles.posts}
    >{children()}</div>
    <div >
    </div>
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
