import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'


const Header = () => (
  <div
    style={{
      background: 'rgb(82, 86, 89)',
      // marginBottom: '.05rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Daniel Graf Resume 2017
        </Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Daniel Graf Resume 2017"
      meta={[
        { name: 'description', content: 'Daniel Graf\'s Virtual Resume' },
        { name: 'keywords', content: 'Daniel, Graf, Resume, 2017' },
      ]}
    >
      <script type="text/javascript" src="http://fast.fonts.net/jsapi/0a390850-37c6-420c-8ead-c15e81202559.js"></script>
    </Helmet>
    <Header/>
    <div
      style={{
        margin: '0 auto',
        width: '100%',
        minHeight: '100vh',
        padding: '1.0875rem 12.9rem 1.45rem', // Padding around Document
        paddingTop: 0,
        // backgroundColor: '#FFF'
        backgroundColor: 'rgb(82, 86, 89)',
        position: 'absolute',
        // whiteSpace: 'nowrap',
        overflow: 'hidden'
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
