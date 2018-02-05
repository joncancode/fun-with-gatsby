import React from 'react'
import Link from 'gatsby-link'

const Projects = () => (
  <div 
  style={{height: '80vh'}}
  >
    <h1 className="page-title">What I've been working on...</h1>
    <div style={{borderBottom: '1px solid #ff7417'}}>
    <h4 style={{paddingTop: '10px'}}>When Again?</h4>
    <div style={{paddingBottom: '20px'}}>
    <button><a target="_new" href="https://github.com/joncancode/remind-me/">Github</a></button>
    <button><a target="_new" href="https://when-did-that-happen.herokuapp.com/">Demo</a></button>
    </div>
    </div>
    <div style={{borderBottom: '1px solid #ff7417'}}>
    <h4 style={{paddingTop: '10px'}}>Pokemon Python</h4>
    <div style={{paddingBottom: '20px'}}>
    <button><a target="_new" href="https://github.com/joncancode/console-adventure/">Github</a></button>
    <button><a target="_new" href="https://github.com/joncancode/console-adventure#try-it-yourself">Demo it yourself</a></button>
    </div>
    </div>
    <div style={{borderBottom: '1px solid #ff7417'}}>
    <h4 style={{paddingTop: '10px'}}>Note Hero</h4>
    <div style={{paddingBottom: '20px'}}>
    <button><a target="_new" href="https://github.com/joncancode/flashcards/">Github</a></button>
    <button><a target="_new" href="https://notehero.herokuapp.com/">Demo</a></button>
    </div>
    </div>
    <div>
    <h4 style={{paddingTop: '10px'}}>My Rex</h4>
    <div style={{paddingBottom: '20px'}}>
    <button><a target="_new" href="https://github.com/joncancode/my-rex/">Github</a></button>
    <button><a target="_new" href="https://myrex.herokuapp.com/">Demo</a></button>
    </div>
    </div>


    <Link className="page-links" style={{marginTop: '40px'}} to="/">Go home</Link>
  </div>
)

export default Projects