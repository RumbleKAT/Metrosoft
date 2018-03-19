import React, { Component } from 'react';
import EMR from "./EMR";
import IEMR from "./iEMR";
import OCS from "./OCS";
import ERP from "./ERP";
import CRM from "./CRM";
import TBiz from "./T_Biz";
import TitleList from '../TitleList';

const List = [
    'EMR','iEMR','OCS','T-BIZ 모바일 EMR','ERP','CRM'
]

class Product extends Component {
    render() {
        return <div>
            <TitleList object={List}/>
            <EMR />
            <IEMR />
            <OCS />
            <TBiz/>
            <ERP />
            <CRM />
          </div>;
    }
}

export default Product;