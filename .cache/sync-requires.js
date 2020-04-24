const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/MABATO/code/studiorock-portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/MABATO/code/studiorock-portfolio/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/MABATO/code/studiorock-portfolio/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/MABATO/code/studiorock-portfolio/src/pages/index.js"))),
  "component---src-pages-message-js": hot(preferDefault(require("/Users/MABATO/code/studiorock-portfolio/src/pages/message.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("/Users/MABATO/code/studiorock-portfolio/src/pages/portfolio.js")))
}

