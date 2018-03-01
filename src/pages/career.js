import React from 'react'
import Link from 'gatsby-link'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Career extends React.Component {
    render() {
        return (
            <div id="main">
                    <header className="major">
                        <ul className="actions">
                            <li><h4><Link to="/">About me</Link></h4></li>
                            <li><h4><Link to="/skills">Skills</Link></h4></li>
                            <li><h4><Link to="/education">Education</Link></h4></li>
                            <li><h2 style={{color: "#1D13D1"}}><Link to="/career">Work</Link></h2></li>
                        </ul>
                    </header>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: '#787878', color: '#fff' }}
                        >
                            <h4 className="vertical-timeline-element-title">Internship</h4>
                            <h5 className="vertical-timeline-element-subtitle">Marel hf</h5>
                            <span className="">2017</span>
                            <p>Worked in a group of 3 people, our task was to write web system which integrates to an deeplearning AI system. Demands were that we wrote our front-end in Javascript/Vue.js and back-end in Python/Django. We worked by the SCRUM methodology</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: '#787878', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Captain / 2nd engineer / Sailor</h3>
                            <h5 className="vertical-timeline-element-subtitle">Sandbrún ehf</h5>
                            <span className="subheader">2004 - 2017</span>
                            <p> Started as a sailor at young age on a small boat named Diddi SH42, got my licence and beginned my fishing carreer as a captain in the summertime. Later on i got my marine engineer licence and started working on another larger ship which this company owns as well as a 2nd engineer for two seasons. This experience has tought me a lot and trained me in for example, how to work in difficult situations where i gained both physical and mental strength alongside experience in working with others</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: '#787878', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Vodafone</h3>
                            <h5 className="vertical-timeline-element-subtitle">Sales representive</h5>
                            <span className="subheader">2011</span>
                            <p>Worked in the call center as a sales consultant, selling their telecommunicative services. From this job i gained a lot of knowledge of telecommunicating services, experience and training in solving problems in both technical and accounting area. I also improved my communicating skills</p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                    <ul className="icons">
                        <li><Link to="/" className="icon fa-arrow-left"> Home</Link></li>
                    </ul>
            </div>
        )
    }
}

export default Career
