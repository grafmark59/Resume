import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import RaisedButton from 'material-ui/RaisedButton';

// NavBar imports
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

// BottomNavigation imports
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;
const closeIcon = <NavigationClose />;

// Drawer imports
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropDown from 'material-ui/svg-icons/navigation/expand-more';


class MyAwesomeReactComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      openDrawer: false
    }


    // this.projectTitle = this.props.projectTitle;
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  select = (index) => this.setState({selectedIndex: index});

  handleDrawerToggle = () => this.setState({openDrawer: !this.state.openDrawer});

  handleDrawerClose = () => this.setState({openDrawer: false});

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
        <Drawer
          docked={false}
          width={300}
          open={this.state.openDrawer}
          onRequestChange={(openDrawer) => this.setState({openDrawer})}
        >
          <MenuItem
            key='workList'
            rightIcon={<ArrowDropDown />}
            primaryTogglesNestedList={true}
            nestedItems={[
              <MenuItem key='workList0' primaryText="Grid lines" checked={true} />,
              <MenuItem key='workList1' primaryText="Page breaks" insetChildren={true} />,
              <MenuItem key='workList2' primaryText="Rules" checked={true} />,
            ]}
            >Work Experience</MenuItem>
          <MenuItem
            key='projectList'
            rightIcon={<ArrowDropDown />}
            primaryTogglesNestedList={true}
            nestedItems={[
              <MenuItem key='projectList0' primaryText="Grid lines" checked={true} />,
              <MenuItem key='projectList1' primaryText="Page breaks" insetChildren={true} />,
              <MenuItem key='projectList2' primaryText="Rules" checked={true} />,
            ]}
          >Project Experience</MenuItem>
          <MenuItem
            key='otherList'
            rightIcon={<ArrowDropDown />}
            primaryTogglesNestedList={true}
            nestedItems={[
              <MenuItem key='otherList0' primaryText="Grid lines" checked={true} />,
              <MenuItem key='otherList1' primaryText="Page breaks" insetChildren={true} />,
              <MenuItem key='otherList2' primaryText="Rules" checked={true} />,
            ]}
            >Other Experience</MenuItem>
        </Drawer>
        <div className='modalContent'>

          <p>Test Content</p>
          <p>Test Content</p>
          <p>Test Content</p>
          <p>Test Content</p>
          <p>Test Content</p>
          <p>Test Content</p>
          <p>Test Content</p>
          <p>Test Content</p>
          <p>Test Content</p>
          <p>Test Content</p>
          <p>Test Content</p>
          <p>Test Content</p>
          <p>Test Content</p>
          <p>Test Content</p>
          <p>Test Content</p>
          <p>Test Content</p>
          <p>Test Content</p>
          <p>Test Content</p>
          <p>Test Content</p>
          <p>Test Content</p>



          <RaisedButton backgroundColor="#008AFF" label="Close" onClick={this.handleCloseModal} />
        </div>
        <footer className='stickyFooter'>
          <Paper zDepth={1}>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
              <BottomNavigationItem
                label="Recents"
                icon={nearbyIcon}
                onClick={() => this.select(0)}
              />
              <BottomNavigationItem
                label="Close"
                icon={closeIcon}
                onClick={() => this.handleCloseModal()}
              />
              <BottomNavigationItem
                label="Nearby"
                icon={nearbyIcon}
                onClick={() => this.select(2)}
              />
            </BottomNavigation>
          </Paper>
        </footer>
      </div>
    );
  }
}

export default MyAwesomeReactComponent;
