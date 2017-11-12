import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import RaisedButton from 'material-ui/RaisedButton';

// Grid imports
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

// NavBar imports
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import Tabs from 'react-simpletabs';

// BottomNavigation imports
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;
const closeIcon = <NavigationClose color="#008AFF" />;


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class MyAwesomeReactComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0
    }


    // this.projectTitle = this.props.projectTitle;
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleDrawerToggle() {
    this.props.toggleDrawer();
  }

  select = (index) => this.setState({selectedIndex: index});

  handleCloseModal () {
    this.props.closeModal();
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='modalBody'>
        <AppBar
          title={this.props.projectTitle}
          className="modalNavBar"
          // iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleDrawerToggle}
          iconElementRight={<IconButton onClick={this.handleCloseModal}><NavigationClose /></IconButton>}
        >

        </AppBar>
        <div className='modalContent'>
          {/* Logo */}

          {/* Text */}
          <div className='flexChild'>
            <span style={{whiteSpace: "pre-wrap"}}>
              { this.props.projectContent.text }
            </span>
          </div>

          {/* Pictures */}
          <div className='flexChild'>
            <Tabs>
              <Tabs.Panel title='Desktop'>
                <div style={styles.root}>
                  <GridList
                    cols={2}
                    cellHeight={200}
                    padding={1}
                    style={styles.gridList}
                  >
                    <Subheader>Desktop</Subheader>
                    {
                      this.props.projectContent.pictures.map((picture) =>
                      <GridTile
                        //key={tile.img}
                        title="Test"
                        subtitle={<span>by <b>Test</b></span>}
                        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                        actionPosition="left"
                        titlePosition="top"
                        titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                        cols={1}
                        rows={1}
                        // cols={tile.featured ? 2 : 1}
                        // rows={tile.featured ? 2 : 1}
                      >
                        <img src={require(`${picture}`)} alt="picture" />
                      </GridTile>
                      )
                    }
                  </GridList>
                </div>
              </Tabs.Panel>
              <Tabs.Panel title='Mobile'>
                <div style={styles.root}>
                  <GridList
                    cols={2}
                    cellHeight={200}
                    padding={1}
                    style={styles.gridList}
                  >
                    <Subheader>Mobile</Subheader>
                    {
                      this.props.projectContent.pictures.map((picture) =>
                      <GridTile
                        //key={tile.img}
                        title="Test"
                        subtitle={<span>by <b>Test</b></span>}
                        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                        actionPosition="left"
                        titlePosition="top"
                        titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                        cols={1}
                        rows={1}
                        // cols={tile.featured ? 2 : 1}
                        // rows={tile.featured ? 2 : 1}
                      >
                        <img src={require(`${picture}`)} alt="picture" />
                      </GridTile>
                      )
                    }
                  </GridList>
                </div>
              </Tabs.Panel>
            </Tabs>

          </div>

          {/* <RaisedButton backgroundColor="#008AFF" label="Close" onClick={this.handleCloseModal} /> */}
        </div>
        <footer className='stickyFooter'>
          <Paper zDepth={1}>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
              <BottomNavigationItem
                icon={closeIcon}
                onClick={() => this.handleCloseModal()}
              />
            </BottomNavigation>
          </Paper>
        </footer>
      </div>
    );
  }
}

export default MyAwesomeReactComponent;
