import React, { Component } from 'react';
import EMR from "./EMR";
import IEMR from "./iEMR";
import OCS from "./OCS";
import MPOC from "./mPOC";
import ERP from "./ERP";
import MEAMS from "./mEAMS";
import CRM from "./CRM";

class Product extends Component {
    render() {
        return <div>
            <EMR />
            <IEMR />
            <OCS />
            <MPOC />
            <MEAMS/>
            <ERP />
            <CRM />
          </div>;
    }
}

export default Product;