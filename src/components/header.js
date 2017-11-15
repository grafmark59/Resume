import React from "react"
import Link from 'gatsby-link'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftColumn from "../components/left-column"
import RightColumn from "../components/right-column"
import Paper from 'material-ui/Paper';

export default ({ children }) =>
(
  <MuiThemeProvider>
    <Paper
      className='myHeader'
      style={{
        width:'100%',
        background: 'rgb(50, 54, 57)',
        position: 'fixed',
        display: 'flex',
        top: '0px',
        left: '0px',
        height:'50px',
        // border:'1px solid #CCC',
        margin:'0px auto',
        // zIndex: '1'
        // marginBottom: '.05rem',
      }}
    >
      <LeftColumn style={{
        padding: '10px',
      }}>
        <p style={{
          margin: 'auto',
          fontWeight: 'bold',
          color: 'rgb(241, 241, 241)'
         }}>
          Daniel Graf Resume 2017
        </p>
      </LeftColumn>
    </Paper>
  </MuiThemeProvider>
)
