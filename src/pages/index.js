import React from "react"
import Link from 'gatsby-link'

class About extends React.Component {
    constructor() {
        super()
        this.state = { count: 0 }
      }
    
      render() {
        return (
          <div
          style={{height: '60vh'}}
          >
          <h1 className="page-title">Hi,</h1>
            <p>I'm
                <strong> Jonathan Haines</strong>, a developer from
                <strong> Brooklyn</strong>,
                <strong> New York</strong>.
                </p>
                <a style={{color: '#ff7417'}} class="about-text-links" target="_new" href="https://github.com/joncancode"> I code</a>.
                <a style={{color: '#ff7417'}} class="about-text-links" target="_new" href="https://scripted.org/volunteer/"> I teach</a>.
                <a style={{color: '#ff7417'}} class="about-text-links" target="_new" href="https://medium.com/@jc.haines19/"> I write</a>.
                <a style={{color: '#ff7417'}} class="about-text-links" target="_new" href="https://jonathanhaines.smugmug.com/"> I photograph</a>.
                <p> If you want to work with me, find me at
                <strong> jc.haines19@gmail.com</strong>.
                </p>
                <p> My resume/CV can be found
                <a style={{color: '#ff7417'}} class="about-text-links" target="_new" href="https://rebrand.ly/jon-res-color"> here </a>(
                <a style={{color: '#ff7417'}} class="about-text-links" target="_new" href="https://rebrand.ly/jon-resume"> or here to save ink</a> ).
                </p>
                <div style={{marginTop: '40px'}}>
                <Link className="page-links" to="/projects">See what I've done</Link><br/><br/>
                <Link className="page-links" to="/blogposts">See what I've written</Link>
                </div>
          </div>
        )
      }
    }

export default About
