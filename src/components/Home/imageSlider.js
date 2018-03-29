import React, { Component } from 'react';
import paper from "../../Image/slide_img/Challenge.jpg";
import paper2 from "../../Image/slide_img/Creative.jpg";
import paper3 from "../../Image/slide_img/Credible.jpg";

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
    this.state = { image: obj, currentCount: 5 };
    papers.push(obj);

  }

  init() {
    this.setState({
      currentCount: 5
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
      <div style={{ marginLeft: "auto",marginTop:"0px" }}>
        <img
          style={{ width: "100%",backgroundSize: "cover" }}
          src={this.state.image}
          alt="pic"
        />
      </div>
    );
  }
}

export default ImageSlider;