
import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';

class QRCode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      delay: 100,
      result: "",
    }
    this.handleScan = this.handleScan.bind(this)
  }

  handleScan = (data) => {
    data = parseInt(data);
    if (data !== this.state.result && data) {
      this.setState({
        result: data,
      })
      this.props.addToBody(data);
    }

  }
  handleError(err) {
    console.error(err)
  }
  render() {
    const previewStyle = {
      paddingTop: "30%",
      paddingBottom: "30%",
      height: 240,
      width: 320,
    }

    return (
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default QRCode;