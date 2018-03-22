import React, { Component } from 'react';
import PointDiv from "../pointDiv";
import RoundTitle from "../RoundTitle";
import ContentList from "../ContentList";
import ContentImg from "../../../Image/VOIP.png";
import FlowChart from "../../../Image/comp.png";

const intro = [
    "유선 전화를 통한 가계비 부담을 줄이기 위해 기존 또는 신규 인터넷 회선을 이용하여 저렴한 통신비용과 PSTN과 PSDN의 양방향 통신 서비스를 지원하여 더욱 안정적인 서비스를 지원합니다."
];

const features = [
  {
    title: "안정성",
    contents: [
      { title : "인터넷 또는 전기가 끊겨도 안전합니다." },
      { title : "인터넷에 문제가 있거나 전원에 문제가 생길 경우 자동으로 KT 유선전화로 전환 되어 안전합니다."}
    ]
  },
  {
    title: "편리성",
    contents: [
      { title : "기존 전화번호 그대로 사용이 가능합니다." },
      { title : "RID(전화번호 변경)서비스로 기존 전화번호와 전화기를 그대로 사용합니다."}
    ]
  },
  {
    title: "품질",
    contents: [
      { title : "끊김이나 잡음이 발생하지 않습니다" },
      { title : "통화 품질을 최우선으로 하여 고가의 무압축 코덱 방식을 채택하여 통화품질을 최우선으로 보장합니다." }
    ]
  },
  {
    title: "저렴한 가격",
    contents: [
      { title : "시외를 걸더라도 가격은 시내요금입니다." },
      { title : "사내 외 구분 없이 가장 낮은 가격으로 통화를 하실 수 있습니다."}
    ]
  },
  {
    title: "유연성",
    contents: [
      { title : "특수번호를 걸더라도 가격은 똑같습니다."},
      { title : "특수번호 등 일반 인터넷 전화에서는 사용할 수 없거나 별도의 요금이 발생되는 타사와는 달리 저희 제품은 시내요금으로 통화가 가능합니다."}
    ]
  },
  {
    title: "본지사 무료통화",
    contents: [
      { title : "본사와 지사간 통화는 무료입니다."},
      { title : "본사와 지사간 통화가 무료일 뿐만 아니라 주거래처까지 저희 제품을 사용하실 경우 통화료는 무료입니다."}
    ]
  }
];

const effects = [
    "비용절감 : 시외 75% , 이동전화 15% ~ 24% , 국제전화 80%의 비용이 절감됩니다.",
    "기존 네트워크를 사용하여 단말기를 별도 구입하거나 하는 비용이 없습니다.",
    "차세대 망 구성에 맞추어 다양한 부가서비스가 가능합니다.",
    "거리에 무관한 통신 요금으로 시외 요금도 시내요금으로 통화가 가능합니다.",
    "통화 품질을 최우선으로 Busy나 끊김 현상의 발생이 적습니다."
];
class VoIPContent extends Component {
    render() {
        return <div style={{ padding: "50px" }}>
            <PointDiv onTitle={"VOIP 사업"} />
            <RoundTitle onTitle={"소개"} />
            <div style={{ marginTop: "50px", padding: "10px" }}>
              <ContentList OnContent={intro} />
              <div style={{ padding: "10px", margin: "0px 0 0px 40px " }}>
                <a className="ui teal basic button" href="http://www.metro070.com/">
                  Metro 070 바로가기
                </a>
              </div>
            </div>
            <RoundTitle onTitle={"사업 내용"} />
            <div style={{ marginLeft: "20px" }}>
              <div style={{ padding: "10px", margin: "90px auto 0px auto", width: "50%", minWidth: "320px" }}>
                <img style={{ marginRight: "50px" }} src={ContentImg} alt="VOIP 사업내용 이미지" />
              </div>
            </div>
            <RoundTitle onTitle={"서비스 구성도"} />
            <div style={{ marginLeft: "20px" }}>
              <div style={{ padding: "10px", margin: "90px auto 0px auto", width: "50%", minWidth: "320px" }}>
                <img style={{ marginRight: "50px" }} src={FlowChart} alt="VOIP 서비스 구성도" />
              </div>
            </div>
            <RoundTitle onTitle={"특징"} />
            <div style={{ marginTop: "50px", padding: "10px", marginBottom: "50px" }}>
              <ContentList OnContent={features} OnType={"number"} OnColor={"#ff9b0b"} />
            </div>
            <RoundTitle onTitle={"도입 효과"} />
            <div style={{ marginTop: "50px", padding: "10px" }}>
              <ContentList OnContent={effects} />
            </div>
          </div>;
    }
}

export default VoIPContent;