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
            <h1 className="page-title">About Me</h1>

            <p>Hi, I'm
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
                <a style={{color: '#ff7417'}} class="about-text-links" target="_new" href="docs/Jonathan Haines - resume - color.pdf"> here </a>(
                <a style={{color: '#ff7417'}} class="about-text-links" target="_new" href="docs/Jonathan Haines - resume - bw.pdf"> or here to save ink</a> ).
                </p>
                <div style={{marginTop: '40px'}}>
                <Link to="/">Go home</Link>
                </div>
          </div>
        )
      }
    }

export default About
