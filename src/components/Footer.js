import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://twitter.com/studiorockcodes" className="icon fa-twitter">
            {/* <span className="label"> Twitter </span> */}
          </a>
        </li>
        <li>
          <a href="https://github.com/rockyliwanag" className="icon fa-github">
            {/* <span className="label"> Github </span> */}
          </a>
        </li>
        <li>
          <a href="/message" className="icon fa-envelope-o" >
            {/* <span className="label"> Email </span> */}
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li> &copy; StudioRock </li>
        <li>
          Design by:
          <a href="https://www.linkedin.com/rocky-liwanag"> ROCKY LIWANAG </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
