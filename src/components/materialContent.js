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
import Link from 'material-ui/svg-icons/content/link';

import Tabs from 'react-simpletabs';
import FloatingActionButton from 'material-ui/FloatingActionButton';

// BottomNavigation imports
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;
const linkIcon = <NavigationClose color="#008AFF" />;//<Link color="black" hoverColor="#008AFF"/>;
const closeIcon = <NavigationClose color="#008AFF" />;


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  gridList: {
    width: 450,
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
    var link;
    if (this.props.projectContent.link) {
        link = (
          <FloatingActionButton
            className='linkButton'
            href={this.props.projectContent.link}
            mini={true} backgroundColor="#008AFF"
            target='_blank'>
            <Link />
          </FloatingActionButton>
        );
      }

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

          {/* Text */}
          <div className='flexChild'>
            <div className='logo'>
              <div className='logoText'>
                <h2>
                  {this.props.projectContent.client}
                  {this.props.projectContent.course}
                </h2>
              </div>
              <div className='logoLink'>
                <h2>
                  {link}
                </h2>
              </div>

            </div>
            <div style={styles.root}>
              <div style={styles.gridList}>
                <span style={{whiteSpace: "pre-wrap"}}>
                  { this.props.projectContent.text }
                </span>
              </div>
            </div>
          </div>

          {/* Pictures */}
          <div className='flexChild'>
            <Tabs>
              {
                this.props.projectContent.categories.map((category) =>
                <Tabs.Panel
                  key={category}
                  title={category}
                  >
                  <div style={styles.root}>
                    <GridList
                      cols={2}
                      cellHeight={category==='mobile' ? 200 : 225}
                      padding={1}
                      style={styles.gridList}
                    >
                      {
                        this.props.projectContent.pictures.filter(function(picture) {
                            return category===picture.category;
                          }).map((picture) =>
                        <GridTile
                          key={picture.src}
                          title={picture.title}
                          actionPosition="left"
                          titlePosition="top"
                          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                          cols={category==='mobile' ? 1 : 2}
                          rows={category==='mobile' ? 2 : 1}
                        >
                          <img src={require(`${picture.src}`)} alt="picture" />
                        </GridTile>
                        )
                      }
                    </GridList>
                  </div>
                </Tabs.Panel>
              )
            }
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
