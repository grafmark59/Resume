import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../styles/index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Daniel Graf Resume 2017"
      meta={[
        { name: 'description', content: 'Daniel Graf\'s Virtual Resume' },
        { name: 'keywords', content: 'Daniel, Graf, Resume, 2017' },
      ]}
    >
      <script type="text/javascript" src="//fast.fonts.net/jsapi/0a390850-37c6-420c-8ead-c15e81202559.js"></script>
      <link href="https://fonts.googleapis.com/css?family=Kreon" rel="stylesheet"></link>
    </Helmet>

    <div
      className='documentStyle'
      style={{
        margin: '0 auto',
        width: 'auto',
        // minWidth: '1630px',
        minHeight: '100vh',
        padding: '1.0875rem 12.9rem 1.45rem', // Padding around Document
        paddingTop: '60px',
        // backgroundColor: '#FFF'
        backgroundColor: 'rgb(82, 86, 89)',
        position: 'absolute',
        // whiteSpace: 'nowrap',
        overflowX: 'hidden'
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
