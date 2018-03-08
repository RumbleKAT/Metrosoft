import React, { Component } from 'react';
import CEOIntroduce from "./CeoIntroduce";
import Oragnization from "./Organization";
import Timeliner from "./Timeline";
import Map from "./map";

import ceointroduce from "../../../database/Introduce/CeoIntroduce.json";
import organization from "../../../database/Introduce/Organization.json";
import timeline from "../../../database/Introduce/Timeline.json";

import PointDiv from "../pointDiv";
import TitleList from "../TitleList";

const Lists = [
    '인사말',
    '회사연력',
    '조직도',
    '오시는 길'
];

class Introduce extends Component {

    constructor(props){
        super(props);
        this._loadFile = this._loadFile.bind(this);
    }

    _loadFile = (index) => {

        switch (index) {
            case 1:
                this.object = ceointroduce;
                break;
            case 2:
                this.object = organization;
                break;
            case 3:
                this.object = timeline;
                break;
            default:
                break;
        }
        return this.object;
    }

    render() {
        return <div>
            <TitleList object={Lists}/>
            <CEOIntroduce object={this._loadFile(1)} />
            <Timeliner object={this._loadFile(3)} />
            <Oragnization object={this._loadFile(2)} />
            <div>
              <div style={{ padding: "50px" }}>
                <PointDiv onTitle={"오시는 길"} />
              </div>
              <div>
                <div style={{padding:"50px", marginBottom:"50px", fontSize: "1.1em",fontWeight:"bold" }}>
                  <li>
                    지하철 이용시 :  금정역 2번출구 직진 200m 미니스톱
                    좌회전 직진 교량통화 우측건물
                  </li>
                  <li>
                     버스 이용시 :  4호선 범계역 6-2번 마을 LS타워 하차,
                    1호선 명학역 하차 1번 출구 육교 건너서 65번 버스
                    이용 LS타워 하차
                  </li>
                </div>
              </div>
              <Map />
            </div>
          </div>;
    }
}

export default Introduce;