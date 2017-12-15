import React, {Component} from "react"

class Document extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div
        className='documentStyle'
        style={
          {
            display: 'flex',
            flexFlow: 'row wrap',
            width: '815px',
            height: '100%',
            margin: 'auto',
            backgroundColor: 'rgb(255, 255, 255)',
            boxShadow: '0px 2px 5px #000000'
          }
        }>
        {this.props.children}
      </div>
    );
  }
}

export default Document;
