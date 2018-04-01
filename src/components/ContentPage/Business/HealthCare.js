import React, { Component } from 'react';
import PointDiv from "../pointDiv";
import RoundTitle from "../RoundTitle";
import ContentList from "../ContentList";
import LabelContent from "../LabelContent";

const Title = {
    title : "헬스케어 서비스",
    description : "효과적인 기업의 건강관리를 위한 맞춤형 컨설팅 제공과 운영을 위해 토탈 헬스케어 선두기업 메트로소프트(주)가 제안하는 온/오프라인 종합 헬스케어 서비스로서, | 건강검진 뿐만 아니라 건강을 사전에 예방하고 사후 관리할 수 있는 종합 솔루션을 제공합니다."
}


const Model = {
        title : "사업 모델",
        content : [
        {
            title : "사전예방",
            content : [
            { title : "기업 컨설팅" },
            { title : "힐링룸 구축" },
            { title : "코어 프로그램"}]
        },
        {
            title : "건강검진",
            content : [
                { title : "단체검진 대행" },
                { title : "특화 솔루션 제공",
                      content : [
                          "질병 예측",
                          "생체 나이 검사",
                          "유전자 검사"
                      ]
                    }
                ]
            },
            {
                title : "사후관리",
                content : [
                    { title : "건강관리 앱" },
                    { title : "정신건강관리",
                      content : ["멘탈닥터"]
                    },
                    {
                      title: "메디푸드"
                    },
                ]
            }]
        };

const composition = {
        title: "힐링존 구성도",
        content: [
            "검사 (스트레스 측정기)",
            "신체 힐링 과정 (요가치료기구: 선텍 1,2,3)",
            "심층심리 정화과정 (헤드기어 - 소리명상 (종소리, 파도소리, 새소리, 빗소리 등)",
            "집중력 및 자기개발 과정 1 (헤드폰 or 맨탈닥터를 활용한 / 긍정적 자기암시)",
            "집중력 및 자기개발 과정 2 (호흡훈련기 - 상황에 따라 선택)",
            "마지막 단계 1 : 거울보기 (자신과의 대화를 통한 암시의 각인 효과/ 기업현장)",
            "마지막 단계 2 : 상담사 면담"
        ]
    };

const table = [
    {
        title : "1. 스트레스 측정",
        img : "/01.png"
    },
    {
        title : "2. 신체 힐링 (1)",
        img : "/02.png"
    },
    {
        title : "3. 신체 힐링 (2)",
        img : "/03.png"
    },
    {
        title : "4. 신체 힐링 (3)",
        img : "/04.png"
    },
    {
        title : "5. 마음 힐링 | (정서 + 무의식 치유)",
        img : "/05.png"
    },
    {
        title : "6. 내면 심리 힐링 | (긍정 정서 촉진 및 무의식 정화)",
        img : "/06.png"
    },
    {
        title : "7. 집중력 개발",
        img : "/07.png"
    },
    {
        title : "8. 집중력 개발 2 (선택)",
        img : "/08.png"
    }
];

const core = {
    title : "코어 운동 센터",
    description : "과학적으로 검증된 운동 프로그램을 제공하고 재활 전문 물리치료사 및 운동 처방사가 팀을 이뤄 고객의 니즈에 맞게 목표를 설정하고 운동 프로그램 및 생활 습관을 개선하여 주는 곳",
    content : [
        {
            title : "시스템 구상도",
            img : "/core_01.png"
        },
        {
            title: "운동 재활 ZONE",
            img : "/core_02.png"
        },
        {
            title : "측정평가 룸",
            img : "/core_03.png"
        }
    ]
}

const metal = {
    title : "멘탈닥터",
    description : "최고의 디자인, 최고의 품질, 최고의 간편함",
    content : [
        "/metal_01.png",
        "/metal_02.png"
    ]
}

const path = process.env.PUBLIC_URL + "/images/HealthCare";
const divStyle = { padding: "50px"};

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

class HealthCare extends Component {
  loadTitle = obj => {
    return (
      <div style={divStyle}>
        <PointDiv onTitle={obj.title} />
        <RoundTitle onTitle={obj.title + " 소개"} />
        <div style={{ padding: "20px", marginTop: "70px" }}>
          {obj.description.split("|").map((obj, i) => {
            return <p key={i}>{obj}</p>;
          })}
        </div>
      </div>
    );
  };

  loadService = obj => {
    return (
      <div style={divStyle}>
        <RoundTitle onTitle={obj.title + " 소개"} />
        <div style={{ padding: "20px", marginTop: "70px" }}>
          <p>{obj.description}</p>
        </div>
      </div>
    );
  };

  loadModel = obj => {
    return (
      <div style={divStyle}>
        <RoundTitle onTitle={obj.title} />
        <div style={{ marginTop: "150px", marginBottom: "500px"}}>
          {obj.content.map((el, i) => {
            return (
              <div key={i} className="ui teal segment" style={contentStyle}>
                <h2>{el.title}</h2>
                {el.content.map((e, i) => {
                  if (e.hasOwnProperty("content") === true) {
                    return (
                      <div key={i}>
                        <li style={{ fontSize: "16px" }}>{e.title}</li>
                        <ul>
                          {e.content.map((_e, i) => {
                            return (
                              <li style={{ listStyle: "circle" }} key={i}>
                                {_e}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  } else {
                    return (
                      <li key={i} style={{ fontSize: "16px" }}>
                        {e.title}
                      </li>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  loadComposition = obj => {
    return (
      <div style={{ padding: "50px", overflow: "hidden" }}>
        <RoundTitle onTitle={obj.title} />
        <div style={{ padding: "20px" }}>
          <ContentList OnContent={obj.content} />
        </div>
      </div>
    );
  };

  loadTable = obj => {
    return (
      <div style={{ padding: "50px", overflow: "hidden" }}>
        <div className="ui eight column grid">
          {
            obj.map((el,i)=>{
              return <div className="column" key={i} style={{ minWidth:"280px",position:"inherit",marginLeft:"20px" }}>
                  <div className="ui fluid card" style={{position:"inherit"}}>
                    <div className="image" style={{ textAlign: "center", position: "inherit" }}>
                      <img src={path + el.img} alt="obj" style={{ width: "100%", height: "140px" }} />
                    </div>
                    <div className="content" style={{textAlign:"center"}}>
                      <a className="header">{el.title.split('|').map((e,i)=>{
                        return(
                          <p key ={i}>{e}</p>
                        );
                      })}</a>
                    </div>
                  </div>
                </div>;
            })
          }
        </div>
      </div>
    );
  };

  loadCore = obj => {
    return(
        <div style={divStyle}>
            <RoundTitle onTitle={obj.title} />
            <div style={{ padding: "20px", marginTop: "70px" }}>
                <p>{obj.description}</p>
            </div>
            <div>
                {
                    obj.content.map((el,i)=>{
                        return (
                            <div key={i} style={{marginTop:"20px"}}>
                                <LabelContent onTitle={el.title}/>
                                <div style={{ padding: "10px", margin: "10px auto 0px auto", width: "40%", minWidth: "280px" }}>
                                    <img src={path + el.img} alt={el.img} style={{ width:"100%" }} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
  }

  loadMental = obj => {
      return <div style={divStyle}>
          <RoundTitle onTitle={obj.title} />
          <div style={{ padding: "20px", marginTop: "70px" }}>
            <p>{obj.description}</p>
          </div>
          <div>
            {obj.content.map((el, i) => {
              return <div key={i} style={{ marginTop: "50px" }}>
                  <div style={{ padding: "10px", margin: "10px auto 0px auto", width: "40%", minWidth: "280px" }}>
                    <img src={path + el} alt={el} style={{ width: "100%" }} />
                  </div>
                </div>;
            })}
          </div>
        </div>;
  }

  render() {
    return (
      <div>
        {this.loadTitle(Title)}
        {this.loadModel(Model)}
        {this.loadComposition(composition)}
        {this.loadTable(table)}
        {this.loadCore(core)}
        {this.loadMental(metal)}
      </div>
    );
  }
}

export default HealthCare;