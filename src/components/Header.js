import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/BirkirFreyrBaldursson.jpg'
import Link from 'gatsby-link'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link to="/" className="image avatar"><img src={avatar} alt="" /></Link>
                    <h1>Hello. My name is<strong> Birkir</strong><br /> and i am a <strong> web developer.</strong> <br /></h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
