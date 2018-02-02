import React, { Component } from 'react';

const circularButton = {
  display: "block",
  width: "320px",
  height: "30px",
  border: "2px solid #169b9b",
  borderRadius: "40px",
  background: "#169b9b",
  color: "#fff",
  fontSize: "14px",
  padding: "3px 0 3px 10px",
  zIndex: "1",
  position:"absolute"

};

const borderLine = {
   position: "absolute",
   height: "2px",
   width: "65%",
   background : "#dfdfdf",
   marginTop : "16px",
   marginLeft : "320px",
   zIndex: "0"

}
class RoundTitle extends Component {

    constructor(props){
        super(props);
        this.state = {
            object : this.props.onTitle
        };
    }

    render() {
        return <div style={{ padding: "0px", marginTop: "30px", marginRight: "50px" }}>
            <div style={circularButton}>{this.state.object}</div>
            <div style={borderLine} />
          </div>;
    }
}

export default RoundTitle;