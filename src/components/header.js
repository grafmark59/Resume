import React from "react"
import Link from 'gatsby-link'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftColumn from "../components/left-column"
import RightColumn from "../components/right-column"
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Download from 'material-ui/svg-icons/file/file-download';

export default ({ children }) =>
(
  <MuiThemeProvider>
    <Paper
      zDepth={2}
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
      <LeftColumn>
        <p style={{
          paddingTop: '18px',
          paddingLeft: '30px',
          margin: 'auto',
          fontWeight: 'bold',
          color: 'rgb(241, 241, 241)'
         }}>
          DanielGraf-Interactive-Resume
        </p>
      </LeftColumn>
      <RightColumn>
        <IconButton href="/Resume/DanielGraf-Resume.pdf" download='DanielGraf-Resume.pdf' style={{
          paddingTop: '12px',
          paddingRight: '100px',
          margin: 'auto',
          float: 'right'
         }} >
          <Download className='right' color='rgb(241, 241, 241)' />
        </IconButton>
      </RightColumn>
    </Paper>
  </MuiThemeProvider>
)
