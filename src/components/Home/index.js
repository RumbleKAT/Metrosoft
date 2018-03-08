import React, { Component } from 'react';
import Hotline from "./hotLine";
import ImageSlider from "./imageSlider";
import ProductList from './productList';


class Home extends Component {

    render() {
        return <div>
            <ImageSlider/>
            <ProductList/>
            <Hotline />
          </div>;
    }
}

export default Home;