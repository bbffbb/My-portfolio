import React from 'react'
import Link from 'gatsby-link'

class Skills extends React.Component {
    render() {
        return (
            <div id="main">
                <section id="one">
                    <header className="major">
                        <h2>Skills</h2>
                    </header>
                    <p>I've got a few tools to work with when programming but i've focused on web development and found out that i like JavaScript frameworks alot. User experience and usability is my main priority alongside a beautiful design. </p>                       
                    <ul className="actions">
                        <li><strong><u>JavaScript</u></strong></li>
                        <li><a href="https://jquery.com/">jQuery</a></li>
                        <li><a href="https://vuejs.org/">Vue.js</a></li>
                        <li><a href="https://angularjs.org/">Angular.js</a></li>
                        <li><a href="https://expressjs.com/">Express.js</a></li>
                        <li><a href="https://nodejs.org/en/">Node.js</a></li>
                        <li><a href="https://gulpjs.com/">Gulp</a></li>
                        <li><a href="https://gruntjs.com/">Grunt</a></li>
                    </ul>
                    <ul className="actions">
                        <li><strong><u>Other programming languages</u></strong></li>
                        <li>C#</li>
                        <li>Java</li>
                        <li>C++</li>
                        <li>Python</li>
                    </ul>
                    <ul className="actions">
                        <li><strong><u>Databases</u></strong></li>
                        <li><a href="https://www.mongodb.com/">MongoDB</a></li>
                        <li><a href="https://www.postgresql.org/">Postgres</a></li>
                    </ul>
                    
                    <ul className="actions">
                        <li><strong><u>Web frameworks</u></strong></li>
                        <li>.NET CORE</li>
                        <li>Asp.net MVC</li>
                    </ul>
                    <ul className="icons">
                        <li><Link to="/" className="icon fa-arrow-left"> Home</Link></li>
                    </ul>
                  
                </section>
            </div>
        )
    }
}

export default Skills
