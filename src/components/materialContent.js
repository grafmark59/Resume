import React, { Component } from 'react';
import ReactModal from 'react-modal';
import RaisedButton from 'material-ui/RaisedButton';

// NavBar imports
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class MyAwesomeReactComponent extends Component {
  constructor(props) {
    super(props);

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal () {
    this.props.closeModal();
  }

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          className="modalNavBar"
          // iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementRight={<IconButton onClick={this.handleCloseModal}><NavigationClose /></IconButton>}
        />
        <p>Test</p>
        <RaisedButton backgroundColor="#008AFF" label="Close" onClick={this.handleCloseModal} />
      </div>
    );
  }
}

export default MyAwesomeReactComponent;
