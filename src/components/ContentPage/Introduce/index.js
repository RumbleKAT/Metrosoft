import React, { Component } from 'react';
import CEOIntroduce from "./CeoIntroduce";
import Oragnization from "./Organization";
import Timeliner from "./Timeline";
import Map from "./map";
import Axios from 'axios';


//import organization from "../../../database/Introduce/Organization.json";
//import timeline from "../../../database/Introduce/Timeline.json";

import PointDiv from "../pointDiv";
import TitleList from "../TitleList";
import url from "../../server.json";

const Lists = [
    '인사말',
    '회사연력',
    '조직도',
    '오시는 길'
];

const dir = "01";


class Introduce extends Component {
  
   constructor(props){
      super(props);
      this.state = {
          object : {}
      }
   }

  render() {
    return(
    <div>
        <TitleList object={Lists} />
        <CEOIntroduce dir={dir} url={url.url} />
        <Oragnization dir={dir} url={url.url}/>
        <Timeliner dir={dir} url={url.url}/>
        <div>
          <div style={{ padding: "50px" }}>
            <PointDiv onTitle={"오시는 길"} />
          </div>
          <div>
            <div style={{ padding: "50px", marginBottom: "50px", fontSize: "1.1em", fontWeight: "bold" }}>
              <li>
                지하철 이용시 : 금정역 2번출구 직진 200m 미니스톱 좌회전
                직진 교량통화 우측건물
              </li>
              <li>
                버스 이용시 : 4호선 범계역 6-2번 마을 LS타워 하차, 1호선
                명학역 하차 1번 출구 육교 건너서 65번 버스 이용 LS타워 하차
              </li>
            </div>
          </div>
          <Map />
        </div>
    </div>
    );
  }
}

export default Introduce;