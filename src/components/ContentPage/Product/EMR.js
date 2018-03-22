import React, { Component } from 'react';
import EMRImg from "../../../Image/EMR.png";
import LabelContent from "../LabelContent";
import ContentList from "../ContentList";
import PointDiv from "../pointDiv";

const intro = {
    title : "Metro-EMR",
    subtitle : "(Electronic Medical Record)",
    content : "의료기관에서 환자 서비스를 위해 필요한 의무기록차트를 전자화하여 / 의사및 진료지원부서에서 진료차트의 공유를 통해 진료정보의 활용도를 높이고 / 차트 보관 및 불출 등의 번거로움을 없애 진료 효율을 높이기 위해 / 개발된 차세대 전자 의무기록 시스템입니다. "
};

const treatment = [
    "각종 진료 기록을 코드화된 자료로 보관",
    "다양한 서식(개인별/진료과별) 및 Utility",
    "OCS 및 PACS 시스템과의 연계",
    "Non Chart로 Paperless Hospital 구현",
    "진료과별 특색이 고려된 서식 제공",
    "통합 차트 뷰어를 이용한 Old 차트 스캔 이미지 조회",
    "향후 EHR (Electronic Health Records) 및 DW의 기반 구축",
    "의무기록 관리 비용 감소 및 시간/인력의 효율적인 재분배 효과",
    "DW와의 연계를 이용한 임상연구 자료로의 효율적인 활용"
];

const nurse = [
  "Nursing note 및 처방 실행 연계 기록",
  "업무별 간호 서식 표준화",
  "Nursing history, Nursing diagnosis",
  "퇴원 간호 기록지, 환자 중증도 등록 및 특수병동(중환자실, 신생아실, 분만실) 간호 기록 지원",
  "수술 / 마취 기록지 및 각종 설문지 지원"
];

const security = [
  {
    title: "전자 의무기록 도입시 예상되는 개인정보 유출 등에 대비하여 인가되지 않은 사용자로부터 데이터를 보호하고 / 정당한 사용자에게는 쉽고 빠르게 데이터에 접근할 수 있도록 구현함으로써 임상 정보의 기밀성, 무결성, 가용성 및 / 환자의 Privacy 보호를 보장하는 보안 서비스를 제공합니다."
  },
  {
    content : [
    "전자 인증 - 국가 공인인증기관의 공인인증서를 사용한 전자 인증 시스템",
    "전자 서명 - 전자 서명에 따라 원문 + 서명 값 저장, 사용자 제한",
    "권한 설정 - 직종 / 직급 / 진료과 / 환자구분에 따른 세분화된 권한 규정관리"
    ]
  }
];

const imgLeftStyle = {
  width: "200px",
  float: "left",
  margin: "30px 30px 30px 0px"
};


class EMR extends Component {

    constructor(props){
      super(props);
      this.loadIMG = this.loadIMG.bind(this);
      this.loadTitle = this.loadTitle.bind(this);
      this.loadContent = this.loadContent.bind(this);
    }

    loadIMG(){
      return <div style={{ minWidth: "230px", width: "10%", float: "left" ,margin: "30px" }}>
          <img src={EMRImg} alt="Metro-EMR Img" style={imgLeftStyle} />
        </div>;
    }

      loadTitle(){
        return <div style={{ marginTop:"30px" }}>
            <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
              {intro.title}
            </h1>
            <span style={{ fontSize: "20px", fontWeight: "bold", color:"#888" }}>
             {intro.subtitle}
            </span>
            <div style={{borderTop: "dotted 2px #888" , overflow:"hidden", marginTop:"10px", padding:"10px"}}>
              {
                intro.content.split('/').map((row, i) => {
                    return(
                      <p style={{ marginTop:"10px" , fontWeight:"400", fontSize:"16px"}} key={i}>{row}</p>
                    )
                }
              )
              }
            </div>
          </div>;
      }

      loadContent(title, content ){

        var obj = [];

        switch (content) {
          case 1:
            obj = treatment;
            break;
          case 2:
            obj = nurse;
            break;
          case 3:
            obj = security[1].content;
            break;

          default:
            break;
        }
        
          return <div style={{ padding: "10px", marginTop: "40px" }}>
              <LabelContent onTitle={title} onAddLine={true} onColor={"#dfdfdf"} />
              <div style={{ padding: "10px" }}>
                {content === 3 ? <div style={{ marginTop:"10px" , fontWeight:"400", fontSize:"16px"}}>{security[0].title.split("/").map((el,i)=>{
                  return (
                    <p key={i}>{el}</p>
                  )
                })}
                </div> : null}
                <ContentList OnContent={obj} />
              </div>
            </div>;
      }
    render() {
        return <div style={{ padding: "50px", width: "100%" }}>
            <PointDiv onTitle= {"EMR"}/>
            <div style={{ overflow: "hidden" }}>
              {this.loadIMG()}
              <div style={{ minWidth: "250px" }}>
                {this.loadTitle()}
              </div>
              {this.loadContent("진료 EMR", 1)}
              {this.loadContent("간호 EMR", 2)}
              {this.loadContent("보안 및 인증", 3)}
            </div>
          </div>;
    }
}

export default EMR;