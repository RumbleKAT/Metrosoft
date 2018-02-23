import React, { Component } from 'react';
import Slider from 'react-slick';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const divStyle = {
    width : "100%"
}

var rounds = [ true, false, false ];

class ImageSlider extends Component {

    constructor(props){
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.circleCheck = this.circleCheck.bind(this);
      this.checkTrue = this.checkTrue.bind(this);
      this.checkFalse = this.checkFalse.bind(this);
      this.changeOrder = this.changeOrder.bind(this);
    }

    circleCheck(objects){
      return <div style={{ textAlign: "center" }}>
          {objects.map((object, i) => {
            return (<div key={i}>
              {object ? this.checkTrue(i) : this.checkFalse(i)}
            </div>)
          })}
        </div>;
    }

    changeOrder(index){
      console.log(index);
        for (const round in rounds) {
          if (round === false && rounds.indexOf(round) === index){
            rounds[index] = true;
          }else{
            rounds[index] = false;
        }
      }
      return (
        this.circleCheck(rounds)
      )
    }

    checkTrue(index){
      return <div className="circle icon" index={index} />;
    }

    checkFalse(index){
      return <div className="circle outline icon" index={index} onClick={this.changeOrder(index)} />;
    }

    next(){
      this.slider.slickNext();
    }

    previous(){
      this.slider.slickPrev();
    }
    render() {
        return <div style={{ marginLeft: "auto" }}>
            <Slider ref={c => this.slider = c} {...settings}>
             <div key={1}><h3>1</h3></div>
             <div key={2}><h3>2</h3></div>
             <div key={3}><h3>3</h3></div>
            </Slider>
              {this.circleCheck(rounds)}
          </div>;
    }
}

export default ImageSlider;