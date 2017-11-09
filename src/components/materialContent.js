import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import RaisedButton from 'material-ui/RaisedButton';

// NavBar imports
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class MyAwesomeReactComponent extends Component {
  constructor(props) {
    super(props);

    // this.projectTitle = this.props.projectTitle;
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal () {
    this.props.closeModal();
  }

  componentDidMount() {
  	// Get the components DOM node
  	// var elem = ReactDOM.findDOMNode(this);
  	// // Set the opacity of the element to 0
  	// elem.style.opacity = 0;
  	// window.requestAnimationFrame(function() {
  	// 	// Now set a transition on the opacity
  	// 	elem.style.transition = "opacity 2500ms";
  	// 	// and set the opacity to 1
  	// 	elem.style.opacity = 1;
  	// });
  }

  render() {
    return (
      <div>
        <AppBar
          title={this.props.projectTitle}
          className="modalNavBar"
          // iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementRight={<IconButton onClick={this.handleCloseModal}><NavigationClose /></IconButton>}
        />
        <p>Test Content</p>
        <RaisedButton backgroundColor="#008AFF" label="Close" onClick={this.handleCloseModal} />
      </div>
    );
  }
}

export default MyAwesomeReactComponent;
