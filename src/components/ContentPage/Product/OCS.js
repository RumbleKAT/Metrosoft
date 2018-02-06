import React, { Component } from 'react';
import PointDiv from "../pointDiv";

const titleStyle = obj => {
  return {
    textAlign: "center",
    color: obj
  };
};

const contentStyle = {
  marginTop: "20px",
  float: "left",
  minWidth: "250px",
  marginRight: "10px",
  height: "230px"
};

const selectedcolors = ["#64b764", "#649dc2", "#feb40e", "#9fc543"];

const Title = {
    title : 'Metro-OCS',
    subtitle : "(Order Communication System)",
    content : "Metro-OCS는 환자의 등록 및 진료, 수납, 청구 등 원내의 모든 DATA를 관리 전달하는 것은 물론 병원의 모든 행정을 효율적으로 관리할 수 있도록 자동화 및 통합구축을 통하여 진료 생산성을 극대화하여 환자 서비스를 향상시키기 위해 개발된 통합 의료정보시스템입니다. 중소병원은 물론 의원 및 대학병원까지 적용 가능하며 향후 EMR 시스템으로 전환되는 토대로 제공합니다."
}

const compositions = [
  [
    "신속하고 투명한 수납관리",
    "재원심사로 누락방지/삭감율 격감",
    "수납 및 청구 미수의 통합관리",
    "보험청구의 화면 심사",
    "EDI 청구"
  ],
  [
    "다 기능의 간편한 처방관리 기능",
    "처방에 근거한 간호관리 자동화",
    "진료재료 청구 자동화",
    "검사결과 및 누적결과조회 통합"
  ],
  [
    "처방에 의한 검사 예약 관리",
    "검사장비와의 Interface | (결과 관리의 오류/전송지연방지)",
    "임상병리검사의 QC관리",
    "OCS에 의한 재료관리 및 청구"
  ],
  [
    "생산성 향상을 지원하는 행정관리 시스템",
    "OCS와 연계된 EIS 원가분석 기초자료",
    "다중 재고 Location을 지원하는 물류체계"
  ]
];

const Lists = [
  {
    title: "1. 원무/보험",
    description:
      "병원의 수납 및 청구 업무를 진료시스템과 얀계한 전산화를 통해 정확하고 신속한 접수/수납업무 를지원하고 진료비 계산 및 보험청구 등의 정확도를 높임으로써 병원의 수익증대와 환자 서비스의 질을 향상시킬 수 있도록 개발된 시스템입니다.",
    works: [
      {
        title: "원무",
        contents: [
          {
            title: "접수 업무 처리의 신속화",
            contents: [
              "환자의 인적사항, 보험사항 ,진료과 스케줄 및 진료 Capacity 등을 한 화면에서 처리 가능",
              "진료전달체계를 수용하는 접수가능 (진료의뢰서, 진료사실통보서 등)"
            ]
          },
          {
            title: "수납 업무 처리의 신속화",
            contents: [
              "처방전달과 수가자동계산 기능에 의한 수납처리 기능",
              "D/C 처방 및 반환처리를 자유롭게 수용하는 기능",
              "환자의 선택에 의한 부분 수납및 잔여분 수납기능"
            ]
          },
          {
            title: "업무의 질적인 향상"
          },
          {
            title:
              "진료과, 치료실 및 주사실 예약을 한번의 수납으로 예약절차 수행"
          },
          {
            title: "No Slip System"
          }
        ]
      },
      {
        title: "보험",
        content: [
          {
            title:
              "청구누락방지 / 삭감율 저하(삭감 분석 및 이의 신청기능, 수가정보의 사전관리"
          },
          {
            title: "수납 및 청구 미수의 통합관리"
          },
          {
            title: "보험청구 기간 단축(Daily 심사체계 및 외래 무심사 체계구축)"
          },
          {
            title: "서면 청구 및 인터넷을 통한 EDI 청구 지원"
          },
          {
            title: "법제도 변경 시 신속한 지원"
          }
        ]
      }
    ]
  },
  {
    title: "2. 진료",
    description:
      "처방입력의 전산화를 통해 원무 및 진료지원 시스템에 정확하고 신솟한 처방전달을 구현함으로써 진료진의 업무효율을 증대시키고 환자에 대한 서비스의 질을 높이도록 개발된 시스템입니다.",
    works: [
      {
        title: "진료",
        content: [
          {
            title: "다양한 진단서 서식지원"
          },
          {
            title: "PACS 및 EMR과의 연동"
          },
          {
            title: "환자 대기실의 TV와의 Interface를 통한 대기 환자에 대한 배려"
          },
          {
            title: "모든 처방 유형에 대한 전산 처리 기능",
            content: [
              "다양한 처방입력 기능(일일처방, 약속처방, 반복처방, 계속처방 등)",
              "상병 및 처방의 편리하고 다양한 검색기능 제공",
              "환자별 및 처방별 Message 기능 부가"
            ]
          },
          {
            title: "진료와 간호업무, 진료지원 및 원무시스템과의 완벽한 연결",
            content: [
              "진료정보, 처방의 접수, 실시, 결과 및 수납여부 등의 상태 정보를 실시간으로 전달"
            ]
          },
          {
            title: "검사에 대한 다양한 결과 조회",
            content: [
              "진료 화면에서도 검사에 대한 결과를 손쉽게 확인",
              "임상병리검사의 경우 Text 결과 뿐만 아니라 수치결과 및 누적결과와 그래프에 의한 상태 변화까지 조회"
            ]
          }
        ]
      },
      {
        title: "간호",
        content: [
          {
            title: "처방에 근거한 간호관리 자동화"
          },
          {
            title:
              "각종 기록지 지원(입태원 기록지, 수술마취기록지, TPRBP,I/O 기록지 등)"
          },
          {
            title: "외래예약 스케줄 설정의 간편화"
          }
        ],
        image: {
          url: "../../../Image/OCS/00.png",
          align: "center"
        }
      }
    ]
  },
  {
    title: "3. 진료지원",
    description:
      "처방과 관련된 주요 진료지원부서 및 특수부서의 포괄적인 전산화를 통해 부분적인 전산화로 인한 정보",
    works: [
      {
        title: "의무기록",
        content: [
          {
            title: "암 환자 분석"
          },
          {
            title: "사용자의 요구 사항에 따른 맞춤 통계"
          }
        ],
        image: {
          url: "../../../Image/OCS/01.png",
          align: "right"
        }
      },
      {
        title: "약국",
        content: [
          {
            title: "진료, 간호와 연계한 신속하고 정확한 처방전달"
          },
          {
            title: "병동 약 처방전 자동 출력"
          },
          {
            title: "약자동조제기 및 전광판 Interface"
          }
        ],
        image: {
          url: "../../../Image/OCS/02.png",
          align: "right"
        }
      },
      {
        title: "종합검진",
        content: [
          {
            title: "패키지별 묶음 처방 (추가처방가능)"
          },
          {
            title: "원클릭 판정소견 입력"
          },
          {
            title: "종합검진 자동판정"
          }
        ],
        image: {
          url: "../../../Image/OCS/03.png",
          align: "right"
        }
      },
      {
        title: "일반검진",
        content: [
          {
            title: "공단 수진자 자격조회 및 자동입력"
          },
          {
            title: "공단 P/G과 자격조회 및 결과 인터페이스"
          }
        ]
      },
      {
        title: "방사선",
        content: [
          {
            title: "외래 검사의 처방/수납 발생시 알림 기능"
          },
          {
            title: "PACS와 연동"
          },
          {
            title: "검사결과의 실시간 전달"
          }
        ],
        image: {
          url: "../../../Image/OCS/04.png",
          align: "right"
        }
      },
      {
        title: "기능검사",
        content: [
          {
            title: "PACS와 연동"
          }
        ],
        image: {
          url: "../../../Image/OCS/05.png",
          align: "right"
        }
      },
      {
        title: "핵의학",
        content: [
          {
            title: "PACS연동 및 약품 재고 관리"
          }
        ]
      },
      {
        title: "영양관리",
        content: [
          {
            title: "병동과 연계하여 정확한 환자의 식이정보 제공"
          },
          {
            title: "영양사 처방 기능"
          },
          {
            title: "다양한 통계 제공 (식수통계, 분류별 통계, 식대통계 등)"
          }
        ]
      },
      {
        title: "물리치료[재활의학]",
        content: [
          {
            title: "메시지 처방에 대한 치료사 상세처방"
          },
          {
            title: "영양사 처방 기능"
          },
          {
            title: "사용자의 필요에 부합하는 다양한 통계제공"
          }
        ],
        image: {
          url: "../../../Image/OCS/06.png",
          align: "right"
        }
      }
    ]
  }
];

class MetroOCS extends Component {
  constructor(props) {
    super(props);
    this.loadComposition = this.loadComposition.bind(this);
    this.loadDetail = this.loadDetail.bind(this);
    this.loadContent = this.loadContent.bind(this);
    this.loadSubtitle = this.loadSubtitle.bind(this);
    this.loadList = this.loadList.bind(this);
  }
  loadDetail(objects) {
    console.log(objects);
    return (
      <div>
        {objects[0]}
        <br />
        {objects[1]}
      </div>
    );
  }

  loadComposition() {
    return (
      <div style={{ padding: "0px", overflow: "hidden", marginTop: "50px" }}>
        <div className="ui green segment" style={contentStyle}>
          <h2 style={titleStyle(selectedcolors[0])}>원무</h2>
          <ul className="ui list">
            {compositions[0].map((composition, i) => {
              return (
                <div key={i} style={{ width: "160px" }}>
                  <li>
                    {composition.indexOf("|")
                      ? this.loadDetail(composition.split("|"))
                      : composition}
                  </li>
                  <br />
                </div>
              );
            })}
          </ul>
        </div>
        <div className="ui blue segment" style={contentStyle}>
          <h2 style={titleStyle(selectedcolors[1])}>진료</h2>
          <ul className="ui list">
            {compositions[1].map((composition, i) => {
              return (
                <div key={i}>
                  <li>
                    {composition.indexOf("|")
                      ? this.loadDetail(composition.split("|"))
                      : composition}
                  </li>
                  <br />
                </div>
              );
            })}
          </ul>
        </div>
        <div className="ui yellow segment" style={contentStyle}>
          <h2 style={titleStyle(selectedcolors[2])}>경영관리</h2>
          <ul className="ui list">
            {compositions[2].map((composition, i) => {
              return (
                <div key={i}>
                  <li>
                    {composition.indexOf("|")
                      ? this.loadDetail(composition.split("|"))
                      : composition}
                  </li>
                  <br />
                </div>
              );
            })}
          </ul>
        </div>
        <div className="ui olive segment" style={contentStyle}>
          <h2 style={titleStyle(selectedcolors[3])}>진료지원</h2>
          <ul className="ui list">
            {compositions[3].map((composition, i) => {
              return (
                <div key={i}>
                  <li>
                    {composition.indexOf("|")
                      ? this.loadDetail(composition.split("|"))
                      : composition}
                  </li>
                  <br />
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  loadContent() {

  }

  loadSubtitle() {

  }

  loadList() {

  }
  render() {
    return (
      <div>
        <PointDiv onTitle={"OCS"}/>
        <div style={{ padding: "60px" , marginRight:"10px" }}>{this.loadComposition()}</div>
      </div>
    );
  }
}

export default MetroOCS;