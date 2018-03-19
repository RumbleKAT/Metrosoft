import React, { Component } from 'react';
import Hotline from "./hotLine";
import ImageSlider from "./imageSlider";
import ProductList from './productList';
import Certified from "./Certified";


class Home extends Component {

    render() {
        return <div>
            <ImageSlider />
            <ProductList />
            <Certified />
          </div>;
    }
}

export default Home;