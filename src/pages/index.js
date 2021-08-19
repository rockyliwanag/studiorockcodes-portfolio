import React from 'react'
import Helmet from 'react-helmet'
import PageTransition from 'gatsby-plugin-page-transitions'
import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image";

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'Project 1 - Blackjack',
    description: 'HTML/CSS/Javascript',
    github: 'https://github.com/rockyliwanag/Blackjack',
    info: '/portfolio/webdev/ga/blackjack/',
    site: 'https://rockyliwanag.github.io/Blackjack/',
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'Project 2 - [bib.lio.file]',
    description: 'Mongoose/Express.js/Node.js',
    github: 'https://github.com/rockyliwanag/bib-yo-file',
    info: '/portfolio/webdev/ga/bibliofile/',
    site: 'https://bib-lio-file.herokuapp.com',
  },
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'Project 3 - Mailman',
    description: 'Python/Django/Postgresql',
    github: 'https://github.com/RyanBranco/Mailman',
    info: '/portfolio/webdev/ga/mailman/',
    site: 'https://mail-man-app.herokuapp.com',
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Project 4 - SWANK',
    description: 'MongoDB/Express/React/Node',
    github: 'https://github.com/rockyliwanag/SWANK',
    info: '/portfolio/webdev/ga/swank/',
    site: 'https://swank.herokuapp.com',
  },
]

const HomeIndex = () => {
  const siteTitle = 'StudioRock - Portfolio'
  const siteDescription = 'Rocky Liwanag | Software Developer | Graphic Artist'

  return (
    <Layout>
      <PageTransition>
      <Helmet>
        <title> {siteTitle} </title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <div className="main">
        <section id="one">
          <header className="major">
            <div id="index-logo">
              <StaticImage src='../assets/images/Logos/sr-full.png' alt="Studio Rock Logo" />
            </div>
            {/* <h2>
              Welcome to <span> StudioRock. </span> <br />
              Please, poke around.
            </h2> */}

          </header>
          <p style={{textAlign: "justify"}}>
            Welcome to Studio Rock Production, I'm Rocky Liwanag, a software
            engineer, UX / UI and graphic artist. I've designed everything from
            apparel to websites and continue to explore the intersection of
            design and technology. <br />
            <br />
            Thank you for taking the time to check out my portfolio. I created
            my site using a Gatsby starter, GraphQL, SASS framework, and
            deployed on a JAM stack technology. This is the initial version of
            this site, and you can expect it to change and take form in time.
            I'm also continously working on all of my coding projects,
            implementing icebox features.
          </p>
          <ul className="actions">
            <li>
              <Link to="/about" className="button">
                Read More
              </Link>
            </li>
          </ul>
        </section>
        <section id="two">
          <h2> Recent Work </h2>
          <Gallery
            images={DEFAULT_IMAGES.map(
              ({
                id,
                source,
                thumbnail,
                caption,
                description,
                info,
                site,
              }) => ({
                id,
                source,
                thumbnail,
                caption,
                description,
                info,
                site,
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
            Yes. Please get in touch. You can send me a message, and I will
            reply as promptly as possible. I would be glad to answer any
            question/s you may have about my work. Have a wonderful joyous day!
          </p>
          <Contact />
        </section>
      </div>
    </PageTransition>
    </Layout>
  )
}

export default HomeIndex
