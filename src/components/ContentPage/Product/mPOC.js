import React, { Component } from 'react';
import mPOC from "../../../Image/mPOC.png";
import mPOCProcess from "../../../Image/mPOC_process.png";
import ContentList from "../ContentList";
import DottedTitle from "../DottedTitle";
import LabelContent from "../LabelContent";
import PointDiv from "../pointDiv";

const Title = {
  title: "Metro-mPOC",
  subtitle: "(mobile Point Of Care System)",
  content:
    "진료진이 시간과 장소의 구애 없이 무선통신이 가능한 진료 현장에서 환자의 / 각종 임상정보 조회 및 입력을 처리할 수 있는 실시간 현장 진료 시스템입니다."
};

const features = [
    "환자의 임상정보 실시간 조회" ,
    "Vital Sign(TPRBP) 및 I/O 등록 및 조회" ,
    "기존 OCS와 연동을 통한 Portable Clinic 구현" ,
    "약속 처방 등록 기능" ,
    "방사선 , 기능검사 및 임상병리 검사결과 조회",
    "기기 인증과 사용자 인증의 2중 인증 및 데이터 암호화 제공"
];

const divStyle = {
    overflow : "hidden",
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

class MPOC extends Component {

    loadTitle = () => {
        return <div style= {{marginBottom : "30px"}}>
            <img src={mPOC} alt="obj" style={imgLeftStyle}/>
            <DottedTitle onTitle={Title}/>
        </div>;
    }

    loadContent = (title, check) => {
        return <div style={divStyle}>
            <LabelContent onTitle={title} onColor={"#dfdfdf"} onAddLine={true} />
            {check ? <div style={imgCenterStyle}>
                <img src={mPOCProcess} alt="obj" style={{width:"90%"}} />
              </div> : <ContentList OnContent={features} />}
          </div>;
    }

    render() {
        return (
            <div style={{padding:"10px"}}>
                <PointDiv onTitle= {"mPOC"}/>
                {this.loadTitle()}
                {this.loadContent("서비스 특징" , false)}
                {this.loadContent("시스템 구성도" , true)}
            </div>
        );
    }
}

export default MPOC;