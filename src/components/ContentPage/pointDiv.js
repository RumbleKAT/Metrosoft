import React from 'react';

const pointStyle = { backgroundColor: "#169b9b", borderTopWidth: "5px", margin: "0px auto 0px auto", maxWidth: "100px", height: "5px" };
const titleStyle = { padding: "10px", marginLeft: "auto", marginRight: "auto", textAlign: "center" };

const PointDiv = (props) => {

    return <div style={titleStyle}>
        <h1 id={props.onTitle}>{props.onTitle}</h1>
        <div style={pointStyle} />
      </div>;
}

export default PointDiv;