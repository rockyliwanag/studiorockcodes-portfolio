import React from 'react'
import Helmet from 'react-helmet'
// import { Link } from 'gatsby'
import Layout from '../components/layout'

export default () => {
  const siteTitle = 'StudioRock - Portfolio'
  const siteDescription = 'Rocky Liwanag | Software Developer | Graphic Artist'
  return (
    <Layout>
      <Helmet>
        <title> {siteTitle} </title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <div className="main">
        <section className="three">
          <h2> Get In Touch </h2>
          <p>
            Yes.Please keep in touch.You can send me a message, and I will reply
            as promptly as possible.I would love to answer any question you may
            have about my work.Have a blessed day!
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              {/* <form
                method="POST"
                name="contact-message"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/message"
              >
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul
                  className="actions"
                  style={{
                    marginTop: 30,
                  }}
                >
                  <li>
                    <button type="submit">Send Message</button>
                  </li>
                </ul>
              </form>
            </div> */}
              {/* <div className="4u 12u$(small)"> */}
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label"> Address </span>
                  </h3>
                  Murrieta, CA 92562 <br />
                  United States
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label"> Phone </span>
                  </h3>
                  562 - 208 - 3126
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label"> Email </span>
                  </h3>
                  <a href="mailto:rocky.liwanag@outlook.com?Subject=Portfolio%20message">
                    rocky.liwanag @outlook.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
