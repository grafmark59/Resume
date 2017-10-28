import React from "react"

export default ({ children }) =>
  <div
    style={
      {
        display: 'flex',
        flexFlow: 'row wrap',
        width: '815px',
        height: '100%',
        margin: 'auto',
        backgroundColor: 'rgb(255, 255, 255)',
        boxShadow: '0px 2px 5px #000000'
      }
    }>
    {children}
  </div>
