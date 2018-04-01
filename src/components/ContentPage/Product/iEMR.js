import React, { Component } from 'react';
import LabelContent from "../LabelContent";
import PointDiv from "../pointDiv";
import ContentList from "../ContentList";
import iEMRImg from "../../../Image/iEMR.png";
import DottedTitle from "../DottedTitle";

const Title = {
    title : 'Metro-iEMR',
    subtitle : '(Image Electronic Medical Record)',
    content : 'EMR이 도입되지 않은 의료기관에서 환자 서비스를 위해 필요한 기존의 종이 의무 기록 차트를 Scanning하고 이를 체계적으로 / indexing하여 OCS System과 연계함으로써 기존의 진료 시스템을 유지하며 진료지원 부서와 공유도를 높이고 환자 진료의 활용도를 높였습니다. / 또한 차트의 보관 및 불출의 번거로움을 없앤 인적,물적 자원의 절약과 진료 효율을 높이는 영상의무기록시스템입니다.'
};
const imgCenterStyle = {
  padding: "10px",
  width: "35%",
  minWidth: "320px",
  margin: "0px auto 0px",
  overflow: "hidden"
};

const features =[
    "OCS 및 EMR, PACS System과의 연동",
    "동시간대에 동일한 차트를 필요로 하는 부서의 차트 공유 기능",
    "Attach File 등으로 정보 활용 증대",
    "데이터 전환으로 정보 활용성 증대"
];
class IEMR extends Component {
  constructor(props) {
    super(props);
    this.loadImg = this.loadImg.bind(this);
  }

  loadImg() {
    return (
      <div style={{ marginTop: "40px" }}>
        <LabelContent
          onTitle={"구축 흐름도"}
          onAddLine={true}
          onColor={"#dfdfdf"}
        />
        <div style={{ marginTop: "50px" }}>
          <div style={imgCenterStyle}>
            <img style={{ width: "90%" }} src={iEMRImg} alt="iEMR" />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <PointDiv onTitle={"iEMR"} />
        <DottedTitle onTitle={Title}/>
        <div style={{ padding: "50px" }}>
          <LabelContent
            onTitle={"서비스 특징"}
            onAddLine={true}
            onColor={"#dfdfdf"}
          />
          <ContentList OnContent={features} />
          {this.loadImg()}
        </div>
      </div>
    );
  }
}

export default IEMR;