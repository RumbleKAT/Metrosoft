import React, { Component } from 'react';
import Target from "./Target";
import MetroHIS from "./MetroHIS";
import VoIP from "./VOIP";
import Cloud from "./Cloud";
import TitleList from '../TitleList';
import HealthCare from "./HealthCare";
import url from "../../server.json";

const Lists = [
    '의료정보사업',
    '헬스케어 서비스',
    'Metro-cERP',
    'VOIP 사업',
    '주요 고객사'
]

const dir = "02";


class Business extends Component {

    render() {
        return <div>
            <TitleList object={Lists}/>
            <MetroHIS />
            <HealthCare/>
            <Cloud/>
            <VoIP/>
            <Target url={url.url} dir ={dir}/>
          </div>;
    }
}

export default Business;