import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import medium from './images/medium.png'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import angel from './images/angel.png'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import smile from './images/smile2.png'

import './index.css'

const styles = {
  body: {
    backgroundColor: '#e5eeff',
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
    fontFamily: 'Indie Flower, cursive',
    margin: 0,
    fontSize: 36,
    fontWeight: 'bold',
    padding: '25px 0px 15px 0px'
  },
  navGroup: {
    borderTop: '3px solid #6abaef',
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
    color: '#6abaef',
    padding: '8px',
  },
  posts: {
    backgroundColor: 'white',
    maxWidth: '85%',
    margin: '0 auto',
    paddingLeft: '40px',
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
          style={{color: '#13284a'}}
        >
          Jonathan Haines
        </Link>
      </div>
      <span >
<a style={styles.socialLinks} target="_new" href="//medium.com/@jc.haines19/">
    <img src={medium} alt="logo-medium" height="30" width="30"/>
</a>
<a style={styles.socialLinks} target="_new" href="//facebook.com/jonathan.haines.3">
    <img src={facebook} alt="logo-facebook" height="30" width="30"/>
</a>
<a style={styles.socialLinks} target="_new" href="//instagram.com/_jonstagram_/">
 <img src={instagram} alt="logo-instagram" height="30" width="30"/> 
</a>
<a style={styles.socialLinks} target="_new" href="//angel.co/jonathan-haines?public_profile=1">
 <img src={angel} alt="logo-angel" height="30" width="30"/> 
</a>
<a style={styles.socialLinks} target="_new" href="//linkedin.com/in/jonathanhaines1/">
 <img src={linkedin} alt="logo-linkedin" height="30" width="30"/> 
</a>
<a style={styles.socialLinks} target="_new" href="//github.com/joncancode">
 <img src={github} alt="logo-github" height="30" width="30"/> 
</a>
      </span>
    
    </div>
  </div>
)

const Blog = () => (
      <div style={styles.navGroup}>
      <Link 
          to="/"
          style={styles.navLinks}>
          home
        </Link>
      {/* <Link to="/counter" 
          style={styles.navLinks}>
          counter    
      </Link> */}
      <Link to="/projects"
          style={styles.navLinks}>
          projects 
      </Link>
      <Link to="/about"
          style={styles.navLinks}>
          about
      </Link>
      </div>
)

const Footer = () => (
  <div style={{border: '2px solid #6abaef', backgroundColor: '#6abaef'}}>
    <p style={{textAlign: 'right', marginRight: '35px', paddingTop: '5px'}}>© Jonathan Haines 2018</p>
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
      link rel="icon" type="image/png" href={smile} sizes="32x32"
      link rel="icon" type="image/png" href={smile} sizes="16x16"/>
    <Header />
    <Blog />
    <div
      style={styles.container}
    >
    <div style={styles.posts}
    >{children()}</div>
      <Footer/>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

