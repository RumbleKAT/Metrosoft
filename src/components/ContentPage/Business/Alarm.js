import React, { Component } from 'react';
import PointDiv from "../pointDiv";
import ContentList from "../ContentList";
import RoundTitle from "../RoundTitle";
import LabelContent from "../LabelContent";

const intro = {
    title: "소개",
    contents : ["휴대폰 번호를 기반으로 친구추가 없이 카카오톡 앱을 통해 정보성 메시지를 고객에게 바로 보내는 정보형 비즈 메시징 API 상품",
                "병원 및 예약/접수 안내 등 고객에게 전달해야 하는 정보라면 카카오 알림톡 API를 활용하여 카카오톡으로 PUSH 메시지를 보낼 수 있습니다.(단, 마케팅성 메시지는 전송 할 수 없습니다.)"]
}

const comp = {
   title : "시스템 구성",
   contents : ["알림톡 전용 Agent 공급 및 알림톡 발송 실패 시 SMS/LMS 전환 기능 구현 시스템 연동 지원","카카오 알림톡과 알림톡 발송 실패시 문자발송을 동시에 사용 가능합니다.","알림톡 발송 실패 시 2차로 문자 발송을 통하여 성공률을 높일 수 있습니다."],
   img:"/A_01.png"
}

const features = {
    title: "특징",
    contents : [
        {
            title: "저렴한 비용",
            contents : ["기존 SMS보다 저렴한 비용으로 1,000자까지 장문 전송 가능", "카카오 인증마크 / 하단 링크 버튼 등 기존 문자 메시지와 차별화"]
        },
        {
            title : "마케팅 채널",
            contents : ["옐로 아이디","플러스 친구 기반 고객, 모바일, 커뮤니케이션 가능"]
        },
        {
            title : "메세징 시스템",
            contents : ["고객관리에 최적화된 메시징 시스템 구현","API를 통한 시스템 연동, 고객 티켓팅 및 발송 자동화 가능","실시간 메시지 통계 확인 가능"]
        }
    ],
    img: "/A_02.png"
}


const path = process.env.PUBLIC_URL + "/images/Alarm";


class Alarm extends Component {
    loadTitle = () => {
        return <PointDiv onTitle={"알림톡"} />;
    };

    loadImg = (obj) => {
        return <div style={{ padding: "10px", margin: "10px auto 0px auto", width: "40%", minWidth: "320px" }}>
            <img src={path + obj} alt={obj} style={{ width: "95%" }} />
        </div>;
    }

    loadFeatures = (obj) =>{
        return <div>
            <div style={{ overflow: "hidden" }}>
              <RoundTitle onTitle={obj.title} />
            </div>
            {obj.contents.map((el, i) => {
              return <div key={i} style={{ padding: "10px", marginTop: "20px" }}>
                  <LabelContent onTitle={el.title} />
                  <ContentList OnContent={el.contents} />
                </div>;
            })}
            {obj.hasOwnProperty("img") === true ? this.loadImg(obj.img) : null}
          </div>;
    }

    loadContents = (obj) => {
        return <div>
            <RoundTitle onTitle={obj.title} />
            <div style={{ padding: "10px" }}>
              <ContentList OnContent={obj.contents} />
            </div>
            {obj.hasOwnProperty("img") === true ? this.loadImg(obj.img) : null}
          </div>;
    }

  render() {
    return <div style={{ padding: "50px" }}>
        {this.loadTitle()}
        {this.loadContents(intro)}
        {this.loadContents(comp)}
        {this.loadFeatures(features)}
      </div>;
  }
}

export default Alarm;