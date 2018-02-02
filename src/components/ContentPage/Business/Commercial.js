import React, { Component } from 'react';
import PointDiv from "../pointDiv";
import RoundTitle from "../RoundTitle";
import ContentList from "../ContentList";
import FlowChart from "../../../Image/옥외광고물관리.svg";

const managementSituation = [
    "중앙정부 및 지방자치단체의 옥외광고물에 대한 효율적인 관리방안의 관심고조",
    "현행 옥외광고물의 관리 실태를 보면 전체 간판대비 70~80% 이상이 불법 간판으로 체계화된 관리 방법의 부재",
    "예산 및 인력의 부족으로 불법 간판 단속을 위한 옥외광고물의 전수조사 어려움",
    "무수히 난립한 불법간판으로 인해 도시미관이 훼손되고 옥외광고주의 불법에 대한 도덕적 해이 증가",
    "옥외광고물 관리시스템 부재로 불법광고물의 도로점용료, 변상금, 이행강제금 등의 세외수입이 누수"
];

const outline = [
   "옥외광고물 관리시스템은 건물의 주소를 온라인지적도(GIS)와 연계하여 건물에 부착된 광고물의 이미지 및 각종 정보를 실시간 조회, 등록하는 시스템",
   "현장 업무 시 휴대용단말기(UMPC)에 탑재된 GPS 및 GIS 정보를 이용하여 조사하고자 하는 주소지의 건물에 도착할 경우 별도의 주소의 입력 없이 그 건물에 대한 간판의 모든 정보를 이미지와 함께 자동적으로 표시하여 현장 비교 후 변동되거나 신규로 발생한 광고물 정보는 현장에서 등록하여 실시간 무선 인터넷을 통하여 관리 서버로 전송하는 시스템 ",
   "기간계 시스템과의 연계를 통해 사업체 정보, 인허가 정보, 새주소 등을 이용하여 현장업무(전수조사)시 광고주와의 직접 대면이 없으므로 사업주의 불안감 및 민원 발생요인을 사전 배제하는 시스템으로 전산화된 전수조사를 실시하여 도시미관 향상과 세외수입의 혁신적인 증가를 가져오는 시스템"
];

const steps = [
    "현장업무 전산화",
    "민원서비스 개선",
    "불법간판 감소",
    "세외수입증대",
    "Clean 광고물 도시 지향"
]

const effects = [
    "불법 광고물의 양성화 유도",
    "난립한 광고물에 대한 지속적인 지도로 도시미관 개선",
    "전산화된 현장행정업무가 가능하므로 업무량 감소 및 인원 감축 효과",
    "GPS/GIS 정보를 이용한 자동 주소판별 기능 이용으로 정확한 전수조사가 가능",
    "옥외광고물의 양성화에 따른 인허가 수수료, 도료점용료 등 세외수입의 증가"
];
class Commercial extends Component {

    constructor(props){
        super(props);
        this.loadDatas  = this.loadDatas.bind(this);
    }

    loadSteps(objects){
        return <div style={{padding: "40px" , marginTop:"30px"}}>
            <div className="ui tablet stackable steps" style={{ background: "#169b9b" }}>
              {steps.map((step, i) => {
                return <div className="step" key={i}>
                    <div style={{ color: "#999" }}>
                      <i className="idea icon" />
                    </div>
                    <div className="content" style={{ color: "#169b9b" }}>
                      <div className="title">{step}</div>
                    </div>
                  </div>;
              })}
            </div>
          </div>;
    }
    loadDatas(objects){
        return <div>
            <ContentList OnContent={objects}/>
          </div>;
    }
    render() {
        return <div style={{ padding: "50px" }}>
            <PointDiv onTitle={"옥외광고물관리 사업"} />
            <RoundTitle onTitle={"옥외광고물 관리현황"} />
            <div style={{ marginTop: "50px", padding: "10px" }}>
              {this.loadDatas(managementSituation)}
            </div>
            <RoundTitle onTitle={"시스템개요"} />
            <div style={{ marginTop: "50px", padding: "10px" }}>
              {this.loadDatas(outline)}
              {this.loadSteps(steps)}
            </div>
            <RoundTitle onTitle={"시스템 운영 흐름도"} />
            <div style={{ marginLeft: "20px" }}>
              <div style={{ padding: "10px", margin: "90px auto 0px auto", width: "50%", minWidth: "320px" }}>
                <img style={{ marginRight: "50px" }} src={FlowChart} alt="옥외 광고물 관리 흐름도 " />
              </div>
            </div>
            <RoundTitle onTitle={"도입효과"} />
            <div style={{ marginTop: "50px", padding: "10px" }}>
              {this.loadDatas(effects)}
            </div>
          </div>;
    }
}

export default Commercial;