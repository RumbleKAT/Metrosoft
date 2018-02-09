import React, { Component } from 'react';
import EMR from "./EMR";
import IEMR from "./iEMR";
import OCS from "./OCS";
import ERP from "./ERP";
class Product extends Component {
    render() {
        return (
            <div>
                <EMR/>
                <IEMR/>
                <OCS/>
                <ERP/>
            </div>
        );
    }
}

export default Product;