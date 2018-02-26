import React, { Component } from 'react';
import CustomerTable from "./CustomerTable";
import PointDiv from "../pointDiv";
import Remote from "./RemoteControl";
import TitleList from "../TitleList";

const address = [
  {
    title: "부서",
    content: ["대표", "대표전화/고객문의", "", "customer@metrosoft.co.kr/031-465-9971~3"]
  },
  {
    title: "성명",
    content: ["병원 영업", "이용구", "이사", "yglee@metrosoft.co.kr/010-8877-2676"]
  },
  {
    title: "직위",
    content: ["기술 연구소", "노우창", "부장", "wcrho@metrosoft.co.kr"]
  },
  {
    title: "이메일 주소",
    content: ["개발" , "이우일" , "부장","wooil@metrosoft.co.kr"]
  },
  {
    content: ["통신(VOIP)","서진원","팀장","jinwon@metrosoft.co.kr"]
  }
];

const Lists = ['고객지원','원격지원'];

class Customer extends Component {
    render() {
        return <div style={{ marginTop: "30px" }}>
            <TitleList object={Lists}/>
            <PointDiv onTitle={"고객지원"} />
            <CustomerTable onContent={address} />
            <PointDiv onTitle={"원격지원"} />
            <Remote/>
          </div>;
    }
}

export default Customer;