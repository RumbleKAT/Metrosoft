import React, { Component } from 'react';
import CRMImg from "../../../Image/CRM.png";
import CRMSTImg from "../../../Image/CRMST.png";
import ContentList from "../ContentList";
import DottedTitle from "../DottedTitle";
import LabelContent from "../LabelContent";
import PointDiv from "../pointDiv";

const Title = {
  title: "Metro-CRM",
  subtitle: "(Customer Relationship Management)",
  content:
    "Metro-CRM은 기존 CRM을 병의원 환경에 맞도록 개발한 솔루션으로 / 환자가 병원을 방문한 후에도 지속적으로 관리를 받을 수 있도록 치료나 / 접종시기, 주의사항 등을 상담 및 문자 서비스로 제공하는 사후건강관리"
};

const features = [
  "환자에게 다가서는 서비스",
  "진료 예약 부도율의 경감으로 진료 대기 시간 줄임",
  "진료 업무의 효율을 극대화 할 수 있는 발판 마련",
  "고객 만족도와 재방문율을 높이는 효과",
  "상담업무를 지원하는 상담관리시스템 제공"
];

const divStyle = {
  overflow: "hidden",
  padding: "50px"
};

const imgLeftStyle = {
  width: "200px",
  float: "left",
  margin: "30px 30px 30px 100px"
};

const imgCenterStyle = {
  padding: "10px",
  margin: "10px auto 0px auto",
  width: "50%",
  minWidth: "320px",
  overflow: "hidden"
};

class CRM extends Component {
    loadTitle = () => {
        return <div style={{ marginBottom: "50px" }}>
            <img src={CRMImg} alt="obj" style={imgLeftStyle} />
            <DottedTitle onTitle={Title} />
          </div>;
    };

    loadContent = (title, check) => {
        return <div style={divStyle}>
            <LabelContent onTitle={title} onColor={"#dfdfdf"} onAddLine={true} />
            {check ? <div style={imgCenterStyle}>
                <img src={CRMSTImg} alt="obj" style={{ width: "90%" }} />
              </div> : <ContentList OnContent={features} />}
          </div>;
    };

    render() {
        return (
        <div style={{ padding: "10px" }}>
            <PointDiv onTitle={"CRM"} />
            {this.loadTitle()}
            {this.loadContent("서비스 특징", false)}
            {this.loadContent("시스템 구성도", true)}
        </div>
        );
    }
}

export default CRM;