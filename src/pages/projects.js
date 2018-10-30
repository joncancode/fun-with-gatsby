import React from 'react'
import Link from 'gatsby-link'

https://joncancode.github.io/jocamp/

const Projects = () => (
  <div 
  style={{height: '150vh'}}
  >
    <h1 className="page-title">What I've been working on...</h1>
    <div style={{textAlign: 'center'}}>
    <h4 style={{paddingTop: '10px'}}>NYKPie</h4>
    <div style={{paddingBottom: '5px'}}>
    <button style={{border: '2px solid #6abaef', margin: '3px'}}><a target="_new" href="https://github.com/joncancode/d3-pie">Github</a></button>
    <button style={{border: '2px solid #6abaef', margin: '3px'}}><a target="_new" href="https://pedantic-spence-fb0d84.netlify.com/">Demo</a></button>
    <p style={{color: "#ff7417"}}>____________</p>
    </div>
    </div>
    <div style={{textAlign: 'center'}}>
    <h4 style={{paddingTop: '10px'}}>When Again?</h4>
    <div style={{paddingBottom: '5px'}}>
    <button style={{border: '2px solid #6abaef', margin: '3px'}}><a target="_new" href="https://github.com/joncancode/remind-me/">Github</a></button>
    <button style={{border: '2px solid #6abaef', margin: '3px'}}><a target="_new" href="https://when-did-that-happen.herokuapp.com/">Demo</a></button>
    <p style={{color: "#ff7417"}}>____________</p>
    </div>
    </div>
    <div style={{textAlign: 'center'}}>
    <h4 style={{paddingTop: '10px'}}>Pokemon Python</h4>
    <div style={{paddingBottom: '5px'}}>
    <button style={{border: '2px solid #6abaef', margin: '3px'}}><a target="_new" href="https://github.com/joncancode/console-adventure/">Github</a></button>
    <button style={{border: '2px solid #6abaef', margin: '3px'}}><a target="_new" href="https://github.com/joncancode/console-adventure#try-it-yourself">Demo it yourself</a></button>
    <p style={{color: "#ff7417"}}>____________</p>
    </div>
    </div>
    <div style={{textAlign: 'center'}}>
    <h4 style={{paddingTop: '10px'}}>Note Hero</h4>
    <div style={{paddingBottom: '5px'}}>
    <button style={{border: '2px solid #6abaef', margin: '3px'}}><a target="_new" href="https://github.com/joncancode/flashcards/">Github</a></button>
    <button style={{border: '2px solid #6abaef', margin: '3px'}}><a target="_new" href="https://notehero.herokuapp.com/">Demo</a></button>
    <p style={{color: "#ff7417"}}>____________</p>
    </div>
    </div>
    <div style={{textAlign: 'center'}}>
    <h4 style={{paddingTop: '10px'}}>My Rex</h4>
    <div style={{paddingBottom: '5px'}}>
    <button style={{border: '2px solid #6abaef', margin: '3px'}}><a target="_new" href="https://github.com/joncancode/my-rex/">Github</a></button>
    <button style={{border: '2px solid #6abaef', margin: '3px'}}><a target="_new" href="https://myrex.herokuapp.com/">Demo</a></button>
    <p style={{color: "#ff7417"}}>____________</p>
    </div>
    </div>


    <Link className="page-links" style={{marginTop: '40px'}} to="/">Go home</Link>
  </div>
)

export default Projects