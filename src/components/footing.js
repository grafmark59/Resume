import React from "react"

export default ({ children }) =>
  <div
    style={
      {
        paddingTop: '50px',
        paddingBottom: '100px',
        display: 'flex',
        width: '100%',
        backgroundColor: 'rgb(255, 255, 255)'
      }
    }>
    {children}
  </div>
