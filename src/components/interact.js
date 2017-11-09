import React, { Component } from "react"
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MaterialContent from './materialContent';
import RaisedButton from 'material-ui/RaisedButton';

class Interact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
     };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  fadeIn() {
    // // Get the components DOM node
  	// var elem = ReactDOM.findDOMNode(this.subtitle);
  	// // Set the opacity of the element to 0
  	// elem.style.opacity = 0;
  	// window.requestAnimationFrame(function() {
  	// 	// Now set a transition on the opacity
  	// 	elem.style.transition = "opacity 250ms";
  	// 	// and set the opacity to 1
  	// 	elem.style.opacity = 1;
  	// });
  }

  fadeOut() {

  }


  render() {
    return (
      <div>
        <div className='interact' onClick={this.handleOpenModal}>
          { this.props.children }
        </div>
        <ReactModal
           ref={(input) => { this.textInput = input; }}
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           onAfterOpen={this.fadeIn}
           onRequestClose={this.handleCloseModal}
        >
          <MuiThemeProvider>
            <MaterialContent
              closeModal={this.handleCloseModal}
              projectTitle='test title'
            />
          </MuiThemeProvider>
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>

          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

export default Interact;

// export default ({ children }) =>
//   <div className='interact'
//     style={
//       {
//         // paddingBottom: '12px'
//       }
//     }>
//     {children}
//   </div>
