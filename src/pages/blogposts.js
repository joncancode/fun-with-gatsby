import React from 'react'
import Link from 'gatsby-link'

const Posts = () => (
  <div 
  style={{height: '110vh'}}
  >
    <h1 className="page-title">Some stuff I wrote...</h1>
    <div style={{textAlign: 'center'}}>

    <a style={{color: '#13284a', fontWeight: 'bold'}} class="post-text-links" target="_new" href="https://hackernoon.com/the-xhr-history-lesson-you-never-wanted-2c892678f78d">The XHR Lesson You Never Wanted</a>
    <p style={{color: "#ff7417"}}>____________</p>
    </div>

    <div style={{textAlign: 'center'}}>

    <a style={{color: '#13284a', fontWeight: 'bold'}} class="post-text-links" target="_new" href="https://hackernoon.com/terminal-thrillness-adventures-in-the-command-line-e3a1179883bd">Terminal Thrillness — Adventures in the Command Line</a>
    <p style={{color: "#ff7417"}}>____________</p>

    </div>
    <div style={{textAlign: 'center'}}>

<a style={{color: '#13284a', fontWeight: 'bold'}} class="post-text-links" target="_new" href="https://hackernoon.com/return-of-the-consoles-recreating-pok%C3%A9mon-in-python-94e0d7d860de">Return of the Consoles: Recreating Pokémon in Python</a>
    <p style={{color: "#ff7417"}}>____________</p>

    </div>
    <div style={{textAlign: 'center'}}>

<a style={{color: '#13284a', fontWeight: 'bold'}} class="post-text-links" target="_new" href="https://hackernoon.com/postgresql-explained-with-basketball-players-f99fb812c065">PostgreSQL, Explained With Basketball Players</a>
    <p style={{color: "#ff7417"}}>____________</p>

    </div>
    <div style={{textAlign: 'center'}}>

<a style={{color: '#13284a', fontWeight: 'bold'}} class="post-text-links" target="_new" href="https://hackernoon.com/the-simplicity-of-computational-complexity-street-fighter-ii-vs-the-big-o-67786db7653c">The Simplicity of Computational Complexity: Street Fighter II VS. the Big O</a>
    <p style={{color: "#ff7417"}}>____________</p>

    </div>
    <div style={{textAlign: 'center'}}>

<a style={{color: '#13284a', fontWeight: 'bold'}} class="post-text-links" target="_new" href="https://codeburst.io/what-the-database-be60a4a6b903">What the Database?</a>
    <p style={{color: "#ff7417"}}>____________</p>

    </div>
    <div style={{textAlign: 'center'}}>

<a style={{color: '#13284a', fontWeight: 'bold'}} class="post-text-links" target="_new" href="https://medium.com/career-change-coder/what-to-consider-when-marketing-yourself-as-a-developer-784c324c551c">What to Consider When Marketing Yourself as a Developer</a>
    <p style={{color: "#ff7417"}}>____________</p>

    </div>

    <Link className="page-links" style={{marginTop: '40px'}} to="/">Go home</Link>
  </div>
)

export default Posts