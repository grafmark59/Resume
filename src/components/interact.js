import React, { Component } from "react"
import ReactDOM from 'react-dom';

class Interact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
     };

    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal () {
    this.props.innerOpenModal(this.props.title, this.props.content);
  }


  render() {
    return (
      <div>
        <div className='interact' onClick={this.handleOpenModal}>
          { this.props.children }
        </div>
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
