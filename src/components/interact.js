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
    this.fadeOut();
    this.fadeIn();
  }

  handleCloseModal () {
    this.fadeOut();
    this.fadeIn();
  }

  fadeIn() {
    setTimeout(function() {
      this.setState({ showModal: !this.state.showModal });
      document.body.classList.toggle('fade', false);
    }.bind(this), 400);
  }

  fadeOut() {
    document.body.classList.toggle('fade', true);
    // setTimeout(() => {
    //   document.body.classList.toggle('fade', true);
    // }, 2000);
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
           // onAfterOpen={this.fadeIn}
           onRequestClose={this.handleCloseModal}
        >
          <MuiThemeProvider>
            <MaterialContent
              closeModal={this.handleCloseModal}
              projectTitle={this.props.title}
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
