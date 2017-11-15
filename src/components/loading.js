import React, {Component} from 'react'

class Loading extends Component {


  render() {
    return (
      <div id="loader-wrapper">
  			<div className="loader loader1">
          <span />
          <span />
          <span />
          <span />
        </div>
  			<div className="loader-section"></div>
  		</div>

    )
  }

}

export default Loading;
