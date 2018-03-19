import React, { Component } from 'react';
import PointDiv from "../pointDiv";
import ContentList from "../ContentList";
import RoundTitle from "../RoundTitle";
import LabelContent from '../LabelContent';

const Features = [
    "사용자 친화적인 유저 인터페이스 제공",
    "SMS, LMS, MMS, HPS의 다양한 형태의 문자발송기능 지원",
    "예약문자 발송 기능 지원으로 작업자의 편의성과 고객입장의 적시성 제공",
    "문자 내용의 개인화가 가능하도록 태그를 이용한 문자작성 기능",
    "기사용 문자의 재사용 또는 수정 사용이 편리하도록 관리하는 기능(상용구 관리)",
    "그룹으로 클라우드 환경에 저장하여 언제 어디서든 문자를 보내는 서비스",
    "개인 PC에서만 저장하여 사용가능",
    "통합자료 변환 후 강력한 조건 검색 기능을 활용하여 대상자 추출",
    "기업(단체)내에서 사용자의 보안등급별로 조회할 수 있는 권한 관리 기능,",
    "HPS 사용 중인 휴대폰, 모바일 연동에 따른 요금 절감"
]; // 01.png

const comps = [
  {
    title: "문자 관리",
    contents: [
      "메시지 전송 (SMS, LMS, MMS, HPS)",
      "예약문자 관리기능",
      "발송내역 조회"
    ]
  },
  {
    title: "발송내역  관리",
    contents: ["문자발송 통계 (전체, 조직별, 사용자별)", "통계 정산"]
  },
  {
    title: "그룹 관리",
    contents: ["그룹내역 관리", "그룹자료 생성", "통합자료 관리"]
  },
  {
    title: "코드 관리",
    contents: ["상용구 관리 (단문, 장문 포토)","전화번호부 관리"]
  }
];

const detail = [
  {
    title: "메시지 발송",
    contents: [
      "메시지 타입(SMS, LMS, MMS ,HPS) 선택 메시지 발송",
      "최신발신번호, 전화번호부, 그룹 전화부, 통합자료에서 수신 리스트로 전화번호 추가할 수 있습니다.",
      "메시지 내용 작성 후 수신번호 또는 수신리스트에 입력된 전화번호로 문자를 즉시 전송 또는 예약 가능합니다.",
      "선불정보 부분은 현재 사용가능 충전금액 및 전송건수가 조회됩니다."
    ],
    img: ["/02.png"]
  },
  {
    title: "메시지 전송 Byte",
    contents: [
      "SMS : 최대 90Byte로 영문(1Byte) 90자, 한글(2Byte) 45자 입력가능",
      "LMS : 최대 2000Byte 로 영문(1Byte) 2000자, 한글(2Byte) 1000자 입력가능",
      "MMS: 최대 2000Byte 로 영문(1Byte) 2000자, 한글(2Byte) 1000자, 이미지 3장 입력가능",
      "HPS : 최대 2000Byte 로 영문(1Byte) 2000자, 한글(2Byte) 1000자, 이미지 3장 입력가능"
    ]
  },
  {
    title: "HPS 발송",
    contents: [
      "HPS체크 문자 메시지 발송",
      "모바일 어플(문자신궁) 실행",
      "어플(문자신궁) 내용확인 전송시작"
    ],
    img: ["/03.png","/04.png"]
  },
  {
    title: "메시지 전송 Byte",
    contents: [
      "SMS : 최대 90Byte로 영문(1Byte) 90자, 한글(2Byte) 45자 입력가능",
      "LMS : 최대 2000Byte 로 영문(1Byte) 2000자, 한글(2Byte) 1000자 입력가능",
      "MMS: 최대 2000Byte 로 영문(1Byte) 2000자, 한글(2Byte) 1000자, 이미지 3장 입력가능",
      "HPS : 최대 2000Byte 로 영문(1Byte) 2000자, 한글(2Byte) 1000자, 이미지 3장 입력가능"
    ]
  }
];

const path = process.env.PUBLIC_URL + "/MetroSMS";
const con_style = { padding: "50px", marginTop: "10px" };
const contentStyle = { padding: "10px", marginTop: "20px" };

class MetroSMS extends Component {


    loadImg = (obj) => {
        console.log(obj);
        return <div style={{ padding: "10px", margin: "10px auto 0px auto", width: "40%", minWidth: "320px" }}>
            <img src={path + obj} alt={obj} style={{ width: "95%" }} />
        </div>;
    }

    loadTitle = () =>{
        return (
            <div style={con_style}>
               <PointDiv onTitle={"MetroSMS"}/>
            </div>
        )
    }

    loadFeatures =(obj)=>{
        return <div style={{ padding: "50px" }}>
            <RoundTitle onTitle={"특징"} />
            <div style={contentStyle}>
              <ContentList OnContent={Features} />
            </div>
            {this.loadImg("/01.png")}
          </div>;
    }

    loadComp = (obj)=>{
        return (
            obj.map((el,i) =>{
                return (
                    <div style={{padding:"50px"}} key={i}>
                        <LabelContent onTitle={el.title} />
                        <ContentList OnContent={el.contents}/>
                    </div>
                )
            })
        )
    }

    loadDetail = (obj) =>{
        return(
            obj.map((el,i) => {
                if(el.hasOwnProperty("img") === true){
                    console.log(el.img.length);
                    return <div style={{ padding: "50px" }} key={i}>
                        <RoundTitle onTitle={el.title}/>
                        <div style={contentStyle}>
                            <ContentList OnContent={el.contents} />
                        </div>
                        {el.img.length === 1 ?this.loadImg(el.img) : el.img.map((e,i)=>{return <div key={i}>{this.loadImg(e)}</div>})}
                      </div>;
                }else{
                    return <div style={{ padding: "50px" }} key={i}>
                        <RoundTitle onTitle={el.title} />
                        <div style={contentStyle}>
                          <ContentList OnContent={el.contents} />
                        </div>
                      </div>;
                }
            })
        )
    }

    render() {
        return (
            <div>
                {this.loadTitle()}
                {this.loadFeatures(Features)}
                {this.loadComp(comps)}
                {this.loadDetail(detail)}
            </div>
        );
    }
}

export default MetroSMS;