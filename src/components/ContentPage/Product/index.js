import React, { Component } from 'react';
import EMR from "./EMR";
import IEMR from "./iEMR";
class Product extends Component {
    render() {
        return (
            <div>
                <EMR/>
                <IEMR/>
            </div>
        );
    }
}

export default Product;