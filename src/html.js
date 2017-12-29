import React from "react"


import faviconApple from './components/images/favicons/apple-touch-icon.png'
import faviconChrome192 from './components/images/favicons/android-chrome-192x192.png'
import faviconChrome512 from './components/images/favicons/android-chrome-512x512.png'
import favicon32 from './components/images/favicons/favicon-32x32.png'
import favicon16 from './components/images/favicons/favicon-16x16.png'
import faviconICO from './components/images/favicons/favicon.ico'
import manifest from './components/images/favicons/manifest.json'
import safariPinned from './components/images/favicons/safari-pinned-tab.svg'
// import browserConfig from './components/images/favicons/browserconfig.xml'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <link rel="apple-touch-icon" sizes="180x180" href={faviconApple} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <link rel="manifest" href={manifest} />
          <link rel="mask-icon" href={safariPinned} color="#a89472" />
          <link rel="shortcut icon" href={faviconICO} />
          {/* <meta name="msapplication-config" content='./components/images/favicons/browserconfig.xml' /> */}
          <meta name="theme-color" content="#ffffff" />


          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
