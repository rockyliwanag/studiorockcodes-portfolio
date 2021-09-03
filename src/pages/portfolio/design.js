import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions'
import Layout from '../../components/layout'
import Logo from '../../components/portfolio/Logos'
import Designs from '../../components/portfolio/Designs'
import Animations from '../../components/portfolio/Animations'


const Design = () => {
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
        <Link to="/portfolio">
          <div className="icon fa-arrow-left">&nbsp;Portfolio</div>
        </Link>
        <h1>Graphic Design</h1>
        <p>I fell in-love with graphic design when I first encountered MS Paint when I was about 8 years old. My Dad's accountant had me play with his computer as he did my Dad's taxes. After messing around for a bit, I found and opened a file called monalisa.bmp, and that was when I was amazed at how a bunch of small black squares was able to make a picture when zoomed out.</p> <br/>
        <br/>
        <p>To me, Graphic Design is freedom. I can make anything possible, as far as my imagination can stretch. It also fascinates me how Graphic Design can manipulate its audience on how to feel or think.</p>
        <section>
          <h2>Logos</h2>
          <p>
            These were some of the logos that I have created.
          </p>
          <div id="categories">
            <Logo />
          </div>
        </section>
        <section>
          <h2>Animations</h2>
          <p>
            Here are some example of animations using css and svg.
          </p>
          <div id="categories">
            <Animations />
          </div>
        </section>
        <section>
          <h2>Shirt Designs</h2>
          <p>
            Here are some T-shirt designs that I get commissioned from West Kings clothing.
          </p>
          <div id="categories">
            <Designs />
          </div>
        </section>

        <hr />
        <Link to="/message" className="button">
          Contact Me
        </Link>
      </div>
      </PageTransition>
    </Layout>
  )
}

export default Design;