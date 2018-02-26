import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.facebook.com/birkirfreyr.baldursson" className="icon fa-facebook" target="_blank"><span className="label">Facebook</span></a></li>
                        <li><a href="https://www.instagram.com/bibbster10/" className="icon fa-instagram" target="_blank"><span className="label">Instagram</span></a></li>
                        <li><a href="https://www.linkedin.com/in/birkir-freyr-baldursson" className="icon fa-linkedin" target="_blank"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://open.spotify.com/user/birkirfreyrbaldurss/playlist/5iTLBpDdOo0XP2pOgUFFga" className="icon fa-spotify" target="_blank"><span className="label">Spotify</span></a></li>
                        <li><a href="https://twitter.com/birkirfr" className="icon fa-twitter" target="_blank"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/bbffbb" className="icon fa-github" target="_blank"><span className="label">Github</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>Made by Birkir Freyr</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
