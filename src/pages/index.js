import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', src: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet >
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                        <link rel="icon" type="image/png" sizes="16x15" href="/favicon.png" />
                        <link rel="image_src" src="/diddirif.jpg" />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>About me.</h2>
                        </header>
                        <p>I'm born and raised in a small fishing village called Rif which is located in Snæfellsbær on the west coast of Iceland. I went to seek my interest in the fisheries at young age, when suddenly i found the urge to follow another dream and it was to learn how to program.<br /><br />I'm now a Computer Science student, currently studying at University of Reykjavík. I'm taking my first steps into the programming industry where my main interests are web development and design.</p>
                        <ul className="actions">
                            <li><Link to="/skills"> Skills </Link></li>
                            <li><Link to="/education"> Education </Link></li>
                            <li><Link to="/career"> Work carreer </Link></li>
                        </ul>
                    </section>
                    {/*
                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>
                    */}
                 
                    <section id="three">
                            <h2>Get In Touch</h2>
                            <p>If you think you've got a job for me or have something awesome to tell me please send me a message and i'll reply as soon as possible.</p>
                            <div className="row">
                                <div className="8u 12u$(small)">
                                    <form method="POST" action="https://formspree.io/birkirfreyrbaldurss@gmail.com">
                                        <div className="row uniform 50%">
                                            <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                            <div className="6u 12u$(xsmall)">
                                                <input type="email" name="email" id="email" placeholder="Your email"></input>
                                            </div>
                                            <div className="12u">
                                                <textarea name="message" id="message" placeholder="Your message" rows="4"></textarea>
                                            </div>
                                        </div>
                                        <ul className="actions">
                                            <li><input type="submit" value="Send" /></li>
                                        </ul>   
                                    </form>
                                </div>
                                <div className="4u 12u$(small)">
                                    <ul className="labeled-icons">
                                        <li>
                                            <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                            Bólstaðarhlíð 23<br />
                                            Reykjavík, 105<br />
                                            Iceland
                                        </li>
                                        <li>
                                            <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                            <a href="tel:8456776">354-845-6776</a>
                                        </li>
                                        <li>
                                            <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                            <a href="mailto:birkirfreyrbaldurss@gmail.com">Birkirfreyrbaldurss@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </section>

                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`