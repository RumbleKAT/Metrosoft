import React, { Component } from 'react';
import Slider from 'react-slick';

const settings = {
    dots: true,
};
class ImageSlider extends Component {
    render() {
        return <Slider {...settings}>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
          </Slider>;
    }
}

export default ImageSlider;