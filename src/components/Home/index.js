import React, { Component } from 'react';
import Hotline from "./hotLine";
import ImageSlider from "./imageSlider";
class Home extends Component {
    render() {
        return <div>
            <ImageSlider/>
            <Hotline />
          </div>;
    }
}

export default Home;