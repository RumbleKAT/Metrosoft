import React, { Component } from 'react';

const styles = {
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    float: "left",
    marginBottom: "15px",
    marginRight: "20px"
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#888",
    minWidth: "280px",
    float: "left"
  },
  borderline: {
    borderTop: "dotted 2px #888",
    overflow: "hidden",
    marginTop: "60px",
    padding: "10px"
  },
  content: {
    marginTop: "10px",
    fontWeight: "400",
    fontSize: "16px"
  }
};

class DottedTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objects: this.props.onTitle,
      imgcheck: this.props.onCheck
    };
    this.loadTitle = this.loadTitle.bind(this);
  }
  //{ marginTop: "30px", padding: "50px" }
  loadTitle(obj) {
    return (
      <div style={this.state.imgcheck === true ? null : { marginTop: "30px", padding: "50px" }}>
        <div style={styles.title}>{obj.title}</div>
        <div style={styles.subtitle}>{obj.subtitle}</div>
        <div style={styles.borderline}>
          {obj.content.split("/").map((row, i) => {
            return (
              <p style={styles.content} key={i}>
                {row}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
  render() {
    return <div>{this.loadTitle(this.state.objects)}</div>;
  }
}

DottedTitle.defaultProps = {
  onTitle : {},
  onCheck : false
};

export default DottedTitle;