import React, { Component } from "react"
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


  render() {
    return (
      <div>
        <div className='interact' onClick={this.handleOpenModal}>
          { this.props.children }
        </div>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           onRequestClose={this.handleCloseModal}
        >
          <MuiThemeProvider>
            <MaterialContent closeModal={this.handleCloseModal} />
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
