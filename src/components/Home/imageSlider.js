import React, { Component } from 'react';
import paper from "../../Image/paper.jpg";
import paper2 from "../../Image/mPOC_process.png";
import paper3 from "../../Image/mPOC.png";

const papers = [];

function setQueue(){
  papers.push(paper);
  papers.push(paper2);
  papers.push(paper3);
}

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.init = this.init.bind(this);

    setQueue();

    var obj = papers.shift();
    this.state = { image: obj, currentCount: 3 };
    papers.push(obj);

  }

  init() {
    this.setState({
      currentCount: 3
    });
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }

  timer() {
    this.setState({
      currentCount: this.state.currentCount - 1
    });

    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId);
      this.next();
      this.init();
    }
  }

  next() {
    var obj = papers.shift();

    this.setState({
      image: obj
    });

    papers.push(obj);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div style={{ marginLeft: "auto" }}>
        <img
          style={{ width: "100%", height: "200px" }}
          src={this.state.image}
          alt="pic"
        />
      </div>
    );
  }
}

export default ImageSlider;