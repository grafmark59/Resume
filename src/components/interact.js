import React, { Component } from "react"
import Modal from './modal';
import ReactModal from 'react-modal';

class Interact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
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

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          Here's some content for the modal
        </Modal>
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
