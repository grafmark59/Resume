import React, { Component } from "react"
import ReactModal from 'react-modal';

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
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.handleCloseModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
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
