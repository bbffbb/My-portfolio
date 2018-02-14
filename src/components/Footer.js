import React from 'react'
import ReactGA from 'react-ga';

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li>
                        <div>
                                <ReactGA.OutboundLink
                                    eventLabel="Clicked a link"
                                    to="#"
                                    target="">
                                    test
                                </ReactGA.OutboundLink>
                                </div>
                        </li>
                        <li><a href="https://www.facebook.com/birkirfreyr.baldursson" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="https://www.instagram.com/bibbster10/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="https://www.linkedin.com/in/birkir-freyr-baldursson" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://open.spotify.com/user/birkirfreyrbaldurss/playlist/5iTLBpDdOo0XP2pOgUFFga" className="icon fa-spotify"><span className="label">Spotify</span></a></li>
                        <li><a href="https://twitter.com/birkirfr" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/bbffbb" className="icon fa-github"><span className="label">Github</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
