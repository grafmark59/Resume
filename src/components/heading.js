import React from "react"

export default ({ children }) =>
  <div
    style={
      {
        display: 'flex',
        width: '100%',
        backgroundColor: 'rgb(255, 255, 255)'
      }
    }>
    {children}
  </div>
