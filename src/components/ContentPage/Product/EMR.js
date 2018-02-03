import React, { Component } from 'react';
import EMRImg from "../../../Image/EMR.svg";
import LabelContent from "./LabelContent";

const intro = {
    title : "Metro-EMR",
    subtitle : "(Electronic Medical Record)",
    content : "의료기관에서 환자 서비스를 위해 필요한 의무기록차트를 전자화하여 의사및 진료지원부서에서 진료차트의 공유를 통해 진료정보의 활용도를 높이고 차트 보관 및 불출 등의 번거로움을 없애 진료 효율을 높이기 위해 개발된 차세대 전자 의무기록 시스템입니다. "
};

const treatment = [
    "각종 진료 기록을 코드화된 자료로 보관",

];

class EMR extends Component {
    render() {
        return <div style={{ padding: "50px", width: "100%" }}>
            <div style={{ overflow: "hidden" }}>
              <div style={{ minWidth: "270px", width: "20%", float: "left" }}>
                <img src={EMRImg} alt="Metro-EMR Img" />
              </div>
              <div style={{ minWidth: "250px" }}>
                <div style={{ padding: "20px" }}>
                  ksdjalskdjalskdjaslkdjlas
                </div>
              </div>
              <div style={{padding: "10px"}}>
                <LabelContent onTitle={"진료 EMR"} onAddLine={true} />
              </div>
            </div>
          </div>;
    }
}

export default EMR;