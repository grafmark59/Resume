import React from "react"

export default ({ children }) =>
  <div
    style={
      {
        paddingTop: '0.15in',
        paddingLeft: '0.6in',
        paddingRight: '0.6in',
        display: 'flex',
        width: '100%'
      }
    }>
    {children}
  </div>
