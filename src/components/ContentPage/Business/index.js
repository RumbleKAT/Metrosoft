import React, { Component } from 'react';
import Target from "./Target";
import MetroHIS from "./MetroHIS";
import VoIP from "./VOIP";
import TitleList from '../TitleList';

const Lists = [
    '의료정보사업',
    'VOIP 사업',
    '주요 고객사'
]
class Business extends Component {
    render() {
        return <div>
            <TitleList object={Lists}/>
            <MetroHIS />
            <VoIP/>
            <Target />
          </div>;
    }
}

export default Business;