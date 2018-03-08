import React, { Component } from 'react';
import Target from "./Target";
import MetroHIS from "./MetroHIS";
import VoIP from "./VOIP";
import Cloud from "./Cloud";
import TitleList from '../TitleList';

const Lists = [
    '의료정보사업',
    'Metro-cERP',
    'VOIP 사업',
    '주요 고객사'
]
class Business extends Component {
    render() {
        return <div>
            <TitleList object={Lists}/>
            <MetroHIS />
            <Cloud/>
            <VoIP/>
            <Target />
          </div>;
    }
}

export default Business;