import React, { Component } from 'react';
import EMR from "./EMR";
import IEMR from "./iEMR";
import OCS from "./OCS";
class Product extends Component {
    render() {
        return (
            <div>
                <EMR/>
                <IEMR/>
                <OCS/>
            </div>
        );
    }
}

export default Product;