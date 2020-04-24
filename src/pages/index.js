import React from 'react'
import Helmet from 'react-helmet'
import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'Project 4 - SWANK',
    description: 'HTML/CSS/Javascript/Mongoose/Express/React/Node',
    link: 'https://github.com/rockyliwanag/SWANK',
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'Project 3 - Mailman',
    description: 'Python/Django/Postgresql',
    link: 'https://github.com/RyanBranco/Mailman',
  },
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'Project 2 - [bib.lio.file]',
    description: 'HTML/CSS/Javascript/Mongoose/Express.js/Node.js',
    link: 'https://github.com/rockyliwanag/bib-yo-file',
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Project 1 - Blackjack',
    description: 'HTML/CSS/Javascript',
    link: 'https://github.com/rockyliwanag/Blackjack',
  },
]

const HomeIndex = () => {
  const siteTitle = 'StudioRock - Portfolio'
  const siteDescription = 'Rocky Liwanag | Software Developer | Graphic Artist'

  return (
    <Layout>
      <Helmet>
        <title> {siteTitle} </title>{' '}
        <meta name="description" content={siteDescription} />{' '}
      </Helmet>
      <div className="main">
        <section id="one">
          <header className="major">
            <h2>
              Welcome to StudioRock. <br />
              Please, look around.
            </h2>
          </header>
          <p>
            Accumsan orci faucibus id eu lorem semper.Eu ac iaculis ac nunc nisi
            lorem vulputate lorem neque cubilia ac in adipiscing in curae
            lobortis tortor primis integer massa adipiscing id nisi accumsan
            pellentesque commodo blandit enim arcu non at amet id arcu
            magna.Accumsan orci faucibus id eu lorem semper nunc nisi lorem
            vulputate lorem neque cubilia.
          </p>
          <ul className="actions">
            <li>
              <Link to="/about" className="button">
                Learn More
              </Link>
            </li>
          </ul>
        </section>
        <section id="two">
          <h2> Recent Work </h2>
          <Gallery
            images={DEFAULT_IMAGES.map(
              ({ id, source, thumbnail, caption, description, link }) => ({
                id,
                source,
                thumbnail,
                caption,
                description,
                link,
              })
            )}
          />
          <ul className="actions">
            <li>
              <Link to="/portfolio" className="button">
                Full Portfolio
              </Link>
            </li>
          </ul>
        </section>
        <section id="three">
          <h2> Get In Touch </h2>
          <p>
            Yes. Please keep in touch. You can send me a message, and I will
            reply as promptly as possible. I would love to answer any question
            you may have about my work. Have a blessed day!
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                {/*Form Action*/}
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
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label"> Address </span>
                  </h3>
                  24253 Hazelnut Ave <br />
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

export default HomeIndex
