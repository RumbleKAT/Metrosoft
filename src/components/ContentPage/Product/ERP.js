import React, { Component } from 'react';
import DottedTitle from "../DottedTitle";
import ContentList from "../ContentList";
import LabelContent from "../LabelContent";
import PointDiv from "../pointDiv";

import ERPImg from "../../../Image/ERP.png";

const MetroERP = {
    title : "Metro-ERP",
    subtitle: "(Enterprise Resource Planning)",
    content: "의료기관에서 환자서비스를 위해 필요한 원 내외의 인력 및 자금, 장비 등의 자원을 효율적으로 관리함으로써 경영효율을 / 향상시키고 경영환경 변화에 효과적으로 대응하기 위해 개발된 병원 차원의 통합행정업무 지원 시스템입니다."
};

const management = [
    "급여 지급 항목과 공제 항목을 사용자가 다양하게 설정할 수 있도록 구성",
    "인사 관리의 투명성 제공",
    "다양한 증명서 서식 지원",
    "OCS의 간호 근무 편성과 연계된 급여 계산"
];

const accounting = [
    "전표 등록과 연계된 다양한 보조원장 제공(거래처, 입출금, 잔액 등)",
    "OCS와 연계된 자동 분개 기능",
    "영문 재무 재표 지원"
];

const stock = [
    "OCS와 연계한 물품관리",
    "자동 청구 기능",
    "다양한 창고 관리 체계 지원 (JIT 체계-Just In Time)",
    "Internet 구매 발주 체계 구축",
    "동일 물품 창고별 이중 관리 기능 제공"
];

const imgStyle = {
  padding: "10px",
  margin: "10px auto 0px auto",
  width: "35%",
  minWidth: "320px",
  overflow: "hidden"
};

const con_style = {
  padding: "50px",
  marginTop: "10px"
};

class ERP extends Component {

    constructor(props){
        super(props);
        this.loadImg = this.loadImg.bind(this);
    }

    loadImg(){
        return <div style={imgStyle}>
                    <img style={{ width: "90%" }} src={ERPImg} alt="ERP_Image" />
                </div>
    }

    loadContent(objects, title){
        return <div style={con_style}>
            <LabelContent onTitle={title} onAddLine={true} onColor={"#dfdfdf"} />
            <ContentList OnContent={objects} />
          </div>;
    }


    render() {
        return <div style={{marginTop:"50px"}}>
            <PointDiv onTitle={"ERP"}/>
            <DottedTitle onTitle={MetroERP} />
            {this.loadImg()}
            {this.loadContent(management, "인사급여")}
            {this.loadContent(accounting, "재무회계")}
            {this.loadContent(stock, "구매재고")}
          </div>;
    }
}

export default ERP;