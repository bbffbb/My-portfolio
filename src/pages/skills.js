import React from 'react'
import Link from 'gatsby-link'

class Skills extends React.Component {
    render() {
        return (
            <div id="main">
                <section id="one">
                    <header className="major">
                        <ul className="actions">
                            <li><h3><Link to="/">About me</Link></h3></li>
                            <li><h2 style={{color: "#49bf9d"}}><Link to="/skills">Skills</Link></h2></li>
                            <li><h3><Link to="/education">Education</Link></h3></li>
                        </ul>
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
                        <li>C</li>
                        <li>Java</li>
                        <li>C++</li>
                        <li>Python <a href="https://www.djangoproject.com/">(Django)</a></li>
                    </ul>
                    <ul className="actions">
                        <li><strong><u>Databases</u></strong></li>
                        <li><a href="https://www.mongodb.com/">MongoDB</a></li>
                        <li><a href="https://www.postgresql.org/">Postgres</a></li>
                    </ul>
                    
                    <ul className="actions">
                        <li><strong><u>Web frameworks</u></strong></li>
                        <li><a href="https://www.microsoft.com/net/learn/get-started/windows">.NET CORE</a></li>
                        <li><a href="https://www.asp.net/">Asp.net MVC</a></li>
                    </ul>

                    <ul className="actions">
                        <li><strong><u>CI and CD tools</u></strong></li>
                        <li><a href="https://www.heroku.com/">Heroku</a></li>
                        <li><a href="https://travis-ci.org/">Travis</a></li>
                        <li><a href="https://jenkins.io/">Jenkins</a></li>
                    </ul>

                    <ul className="actions">
                        <li><strong><u>Services</u></strong></li>
                        <li><a href="https://www.docker.com/">Docker</a></li>
                        <li><a href="https://aws.amazon.com/">AWS</a></li>
                    </ul>   

                    <ul className="actions">
                        <li><strong><u>Other</u></strong></li>
                        <li><a href="https://en.wikipedia.org/wiki/Microsoft_Dynamics_NAV">Microsoft Dynamics NAV</a></li>
                        <li>Microsoft Office</li>
                        <li>Windows</li>
                        <li>MacOS</li>
                        <li>Ubuntu</li>
                        <li>Github/Gitlab</li>



                    </ul>   

            
                  
                </section>
            </div>
        )
    }
}

export default Skills
