import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'


const Header = () => (
  <div
    style={{
      background: 'rgb(82, 86, 89)',
      marginBottom: '1.45rem',
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
          Daniel Gatsby
        </Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Daniel Graf Resume 2017' },
        { name: 'keywords', content: 'Daniel, Graf, Resume, 2017' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: '100%',
        minHeight: '100vh',
        padding: '1.0875rem 1.0875rem 1.45rem',
        paddingTop: 0,
        backgroundColor: 'rgb(82, 86, 89)'
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
