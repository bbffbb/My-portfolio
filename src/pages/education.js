import React from 'react'
import Link from 'gatsby-link'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Education extends React.Component {
    render() {
        return (
            <div id="main">
                    <header className="major">
                        <ul className="actions">
                            <li><h3><Link to="/">About me</Link></h3></li>
                            <li><h3><Link to="/skills">Skills</Link></h3></li>
                            <li><h2 style={{color: "#49bf9d"}}><Link to="/education">Education</Link></h2></li>
                        </ul>
                    </header>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: '#49bf9d', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Computer Science</h3>
                            <h5 className="vertical-timeline-element-subtitle">University of Reykjavík</h5>
                            <span className="subheader">2014 - present</span>
                            <p> Studies that educate students on how to design and analyze software, algorithms, systems, networking, databases, programming languages, hardware, security and new technology.</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: '#49bf9d', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Pre-studies/Mathematics</h3>
                            <h5 className="vertical-timeline-element-subtitle">University of Reykjavík</h5>
                            <span className="subheader">2013 - 2014</span>
                            <p> Took few courses in math and programming to prepare myself for the degree.</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: '#49bf9d', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Marine engineer</h3>
                            <h5 className="vertical-timeline-element-subtitle">Industrial School</h5>
                            <span className="subheader">2011</span>
                            <p> Licence to control and manage engines on ships, educates students with detailed error detection course, liquid systems, electric systems and rules.</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: '#49bf9d', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Naval rights / Captain license</h3>
                            <h5 className="vertical-timeline-element-subtitle">Industrial School</h5>
                            <span className="subheader">2009</span>
                            <p> Licence to control fishing ships with a maximum length of 12 meters. Courses about crafts or hardware on board, sailing rules, map calculations and history.</p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
               
            </div>
        )
    }
}

export default Education
