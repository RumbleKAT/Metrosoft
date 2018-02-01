import React, { Component } from 'react';
import PointDiv from "../pointDiv";
import RoundTitle from "./RoundTitle";
import BusinessContent from "../../../Image/businessContent.svg";

const titleStyle = (obj) => {
    return (
        {
            textAlign : "center",
            color : obj
        }
    );
};

const selectedcolors = ["#64b764", "#649dc2", "#feb40e", "#9fc543"];

const contentStyle = {
    marginTop:"20px",
    float : "left",
    minWidth : "250px", 
    marginRight : "10px",
    height:"210px"
}

 
class MetroHIS extends Component {

    constructor(props){
        super(props);
        this.loadComposition = this.loadComposition.bind(this);
    }
    loadComposition(){
            return <div style={{ padding: "0px", overflow: "hidden" }}>
                <div className="ui green segment" style={contentStyle}>
                  <h2 style={titleStyle(selectedcolors[0])}>
                    원무
                  </h2>
                  <ul className="ui list">
                    <li>신속하고 투명한 수납관리</li>
                    <br />
                    <li>재원심사로 누락방지/삭감율 격감</li>
                    <br />
                    <li>수납 및 청구 미수의 통합관리</li>
                    <br />
                    <li>보험청구의 화면 심사</li>
                    <br />
                    <li>EDI 청구</li>
                  </ul>
                </div>
                <div className="ui blue segment" style={contentStyle}>
                  <h2 style={titleStyle(selectedcolors[1])}>
                    진료
                  </h2>
                  <ul className="ui list">
                    <li>Full Text 기반의 전자의무 기록관리</li>
                    <br />
                    <li>다 기능의 간편한 처방관리 기능</li>
                    <br />
                    <li>처방에 근거한 간호관리 자동화</li>
                    <br />
                    <li>진료재료 청구 자동화</li>
                    <br />
                    <li>검사결과 및 누적결과 조회 통합</li>
                  </ul>
                </div>
                <div className="ui yellow segment" style={contentStyle}>
                  <h2 style={titleStyle(selectedcolors[2])}>
                    경영관리
                  </h2>
                  <ul className="ui list">
                    <li>생산성 향상을 지원하는 행정관리 시스템</li>
                    <br />
                    <li>OCS와 연계된 EIS 원가분석</li>
                    <br />
                    <li>다중 재고 Location을 지원하는 물류체계</li>
                  </ul>
                </div>
                <div className="ui olive segment" style={contentStyle}>
                  <h2 style={titleStyle(selectedcolors[3])}>
                    진료지원
                  </h2>
                  <ul className="ui list">
                    <li>처방에 의한 검사 예약 관리</li>
                    <br />
                    <li>
                      검사장비와의 Interface <br />
                      (결과관리의 오류 / 전송지연방지)
                    </li>
                    <br />
                    <li>임상병리검사의 QC관리</li>
                    <br />
                    <li>OCS에 의한 재료관리 및 청구</li>
                  </ul>
                </div>
              </div>;
    }

    render() {
        return <div style={{ padding: "50px" }}>
            <PointDiv onTitle={"의료정보사업"} />
            <RoundTitle onTitle={"의료정보사업부문 (Medical Health Care Solution) "} />
            <div style={{ padding: "20px", marginTop: "70px" }}>
              <span>
                메트로소프트는 중/소 병원을 중심으로 MetroHIS(메트로 병원정보시스템)을 공급하고 있습니다.<br />
                MetroHIS는 OCS, EMR, HealthCare, CRM, EIS, mPocs 등의 다양한 제품 군을 가지고 병원실정에 맞는 패키지 의료정보 기능을 제공합니다.
              </span>
              <div style={{ marginTop: "50px" }}>
                <div className="ui label">
                  <i className="chevron right icon" />사업내용
                </div>
                <div style={{ padding: "10px", margin: "10px auto 0px auto", width: "40%", minWidth: "320px" }}>
                  <img style={{ marginRight: "50px" }} src={BusinessContent} alt="사업 내용 그림" />
                </div>
              </div>
              <div style={{ marginTop: "50px" }}>
                <div className="ui label">
                  <i className="chevron right icon" />의료정보사업의 구성
                </div>
                {this.loadComposition()}
              </div>
            </div>
          </div>;
    }
}

export default MetroHIS;