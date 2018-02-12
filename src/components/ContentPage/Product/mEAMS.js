import React, { Component } from 'react';
import mEAMS from "../../../Image/mEAMS.png";
import mEAMSST from "../../../Image/mEAMSST.png";
import ContentList from "../ContentList";
import DottedTitle from "../DottedTitle";
import LabelContent from "../LabelContent";
import PointDiv from "../pointDiv";

const Title = {
    title : "Metro-mEAMS",
    subtitle : "(mobile Emergency Alerting & Monitoring System)",
    content : "무선 인터넷을 기반으로 하여 응급 및 중환자의 실시간 / 위험관리를 위한 시스템입니다."
};

const features = [
    "이 기종 시스템간 데이터 교환을 위한 HL7 Broker 제공",
    "기존 OCS와 연계하여 주요 검사 결과의 비정상 수치 발생시 진료진에게 Alerting",
    "Service 제공 및 실시간 검사결과 조회를 통한 환자의 상태 조기 파악",
    "Alerting & Monitoring 환자 리스트 관리 기능",
    "기존 OCS와 연동을 통한 Portable Clinic 구현",
    "기기 인증과 사용자 인증의 2중 인증 및 데이터 암호화 제공"
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
class MEAMS extends Component {
    loadTitle = () => {
        return <div style={{ marginBottom: "30px" }}>
            <img src={mEAMS} alt="obj" style={imgLeftStyle} />
            <DottedTitle onTitle={Title} />
          </div>;
    };

    loadContent = (title, check) => {
        return <div style={divStyle}>
            <LabelContent onTitle={title} onColor={"#dfdfdf"} onAddLine={true} />
            {check ? <div style={imgCenterStyle}>
                <img src={mEAMSST} alt="obj" style={{ width: "90%" }} />
              </div> : <ContentList OnContent={features} />}
          </div>;
    };

    render() {
        return (
        <div style={{ padding: "10px" }}>
            <PointDiv onTitle={"mEAMS"} />
            {this.loadTitle()}
            {this.loadContent("서비스 특징", false)}
            {this.loadContent("시스템 구성도", true)}
        </div>
        );
    }
}

export default MEAMS;