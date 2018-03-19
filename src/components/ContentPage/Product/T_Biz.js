import React, { Component } from 'react';
import PointDiv from "../pointDiv";
import ContentList from "../ContentList";
import LabelContent from "../LabelContent";
import exImg from "../../../Image/mPOC.png";
//import DottedTitle from '../DottedTitle';

const imgLeftStyle = {
  width: "200px",
  float: "left",
  margin: "-10px 30px 30px 50px"
};

const styles = {
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    float: "left",
    marginBottom: "15px",
    marginRight: "20px"
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#888",
    minWidth: "330px",
    float: "left"
  },
  borderline: {
    borderTop: "dotted 2px #888",
    overflow: "hidden",
    padding: "10px",
    float : "left"
  },
  content: {
    marginTop: "10px",
    fontWeight: "400",
    fontSize: "16px"
  }
};

const TBIZ = {
  title: "T-BIZ 모바일 EMR",
  subtitle: "(Mobile EMR)",
  content:"의료기관에서 환자 서비스를 위해 필요한 의무기록차트를 전자화 하여 의사 및 진료지원부서에서 진료차트의 공유를 통해 진료정보의 활용도를 높이고 / 차트보관 및 불출의 번거로움 없이 항상 환자의 상태 및 진료상황을 확인할 수 있는 어플리케이션 입니다."
};

const features = [
    "현장 중심 환자 CARE(POC)",
    "사용자 편의성 제고(휴대성)",
    "OCS/EMR과 연동된 통합시스템",
    "의료정보제공이 의료진에서 환자까지 확대",
    "환자의 정보 확인 시 One Stop 서비스",
    "간호 업무 생산성 향상"
];

const functions =
  {
    title: ["화면", "주요 기능"],
    content: [
      {
        content: [
          "재원 환자 조회",
          "현재 병원에 재원 중인 모든 환자를 조회한다."
        ]
      },
      {
        content: ["처방 조회", "환자의 처방 내역을 조회한다."]
      },
      {
        content: ["기록지 조회", "의사가 등록한 기록지 내용을 조회한다"]
      },
      {
        content: ["투약 기록지 조회", "간호사가 등록한 투약 내용을 조회한다"]
      },
      {
        content: ["영상 진단 결과 조회", "영상진단의학과에서 등록한 판독소견을 조회한다"]
      },
      {
        content: ["진단검사결과 조회", "진단검사결과를 조회한다"]
      },
      {
        content: ["기타서식리스트 조회", "스캔한 이미지 리스트를 조회한다"]
      },
      {
        content: ["기타서식내용 조회", "선택한 이미지의 내용을 조회한다"]
      },
      {
        content: ["TPR 조회", "TPR을 그래프 형식으로 조회한다"]
      },
      {
        content: ["TPR 등록", "환자의 TPR을 등록한다"]
      },
      {
        content: ["입내원 이력 조회", "입원, 외래내원, 응급실 내원한 이력을 조회한다"]
      }
    ]
  };

const examples = [
  {
    title: "재원 환자 조회",
    img: "/01.png"
  },
  {
    title: "처방 조회",
    img: "/02.png"
  },
  {
    title: "투약 기록지 조회",
    img: "/03.png"
  },
  {
    title: "기타 서식리스트 조회",
    img: "/04.png"
  },
  {
    title: "TPR 조회",
    img: "/05.png"
  }
];

const security = {
  title: "보안성 강화",
  description:
    "T BIZ 모바일 EMR을 사용하는 병원은 사용자 인증, 컨텐츠 보안, 단말기 분실을 포함한 통합 보안체계 가동",
  img: "/11.png"
};

const Device = {
    title: "사용 Device",
    description : "Android OS 3.1 이상 | 디스플레이 크기 10.1 인치 (갤럭시 기준)",
    img : "/10.png"
};

const Effects = [
    {
        title : "Smart Work 환경 구현",
        description : "T BIZ 모바일 EMR을 통해 시간과 장소에 얽매이지 않고 | 언제 어디서나 EMR/OCS의 정보를 쉽고 빠르게 접근이 가능하므로, 의료 분야의 Smart Work 환경 구현과 업무 효율 제고",
        img : "/08.png"
    },
    {
        title : "T BIZ 모바일 EMR 대면 자료",
        description : "회진, 수술 전, 수술 후 등 환자 대면 진료 시 환자의 상태를 T BIZ 모바일 EMR을 통해 | Visual 효과와 함께 환자에게 설명함으로써 의료 서비스의 질을 향상시키고 환자의 신뢰도와 병원의 이미지 상승 유도",
        img : "/09.png"
    },
    {
        title : "기대 효과",
        img : "/10.png"
    }
]
/*
const contentStyle = {
  marginTop: "20px",
  float: "left",
  minWidth: "280px",
  width: "30%",
  marginRight: "10px",
  height: "230px",
  position: "inherit",
  padding: "20px"
};
*/

const path = process.env.PUBLIC_URL + "/T_Biz";
const divStyle = { padding: "50px" };

/*
const con_style = {
  padding: "50px",
  marginTop: "10px"
};
*/
class T_Biz extends Component {

  loadFeature = obj => {
    return (
      <div style={{ padding: "20px" }}>
        <LabelContent onTitle={"특징"} onAddLine={true} onColor={"#dfdfdf"} />
        <ContentList OnContent={obj} />
      </div>
    );
  };

  loadTable = obj => {
    return (
      <div style={{ padding: "20px" }}>
        <LabelContent onTitle={"기능"} />
        <table className="ui teal fixed single line celled table">
          <thead style={{ textAlign: "center" }}>
            <tr>
              {obj.title.map((el, i) => {
                return <th key={i}>{el}</th>;
              })}
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            {obj.content.map((el, i) => {
              return (
                <tr key={i}>
                  {el.content.map((e, i) => {
                    return <td key={i}>{e}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  loadExample = obj => {
    return (
      <div>
        {obj.map((el, i) => {
          return (
            <div key={i}>
              <LabelContent onTitle={el.title} />
              <div
                style={{
                  padding: "10px",
                  margin: "10px auto 0px auto",
                  width: "40%",
                  minWidth: "320px"
                }}
              >
                <img
                  src={path + el.img}
                  alt={el.img}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  loadWithImg = obj => {
    return (
      <div>
        <LabelContent
          onTitle={obj.title}
          onAddLine={true}
          onColor={"#dfdfdf"}
        />
        {obj.hasOwnProperty("description") === true
          ? obj.description.split("|").map((el, i) => {
              return <p key={i}>{el}</p>;
            })
          : null}
        <div
          style={{
            padding: "10px",
            margin: "10px auto 0px auto",
            width: "40%",
            minWidth: "320px"
          }}
        >
          <img src={path + obj.img} alt={obj.img} style={{ width: "100%" }} />
        </div>
      </div>
    );
  };

  loadTitle = () => {
    return <div style={{ marginBottom: "300px" }}>
        <PointDiv onTitle={"T-BIZ 모바일 EMR"} />
        <div style={{ marginBottom: "30px" }}>
          <img src={exImg} alt="obj" style={imgLeftStyle} />
          <div style={{marginTop:"80px",height:"fitContent"}}>
            <div style={styles.title}>{TBIZ.title}</div>
            <div style={styles.subtitle}>{TBIZ.subtitle}</div>
            <div style={styles.borderline}>
              {TBIZ.content.split("/").map((row, i) => {
                return <p style={styles.content} key={i}>
                    {row}
                  </p>;
              })}
            </div>
          </div>
        </div>
      </div>;
  };

  render() {
    return (
      <div style={divStyle}>
        {this.loadTitle()}
        {this.loadFeature(features)}
        {this.loadTable(functions)}
        {this.loadExample(examples)}
        {this.loadWithImg(security)}
        {this.loadWithImg(Device)}
        {Effects.map((el, i) => {
          return <div key={i}>{this.loadWithImg(el)}</div>;
        })}
      </div>
    );
  }
}

export default T_Biz;