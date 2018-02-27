import React from "react";
import Thumbs from '../assets/images/thumbsup.png'
import Link from "gatsby-link"

class Success extends React.Component {
  render() {
    return(
    <div id="main">
      
      <h1>Thank you for your submission!</h1>
      <p>I'll respond as soon as possible</p>
      <div id="responsiveImg">
        <img src={Thumbs} alt="" />
      </div>
      <ul className="icons">
        <li><Link to="/" className="icon fa-arrow-left"> Home</Link></li>
      </ul>
    </div>
    )
  }
}

export default Success
