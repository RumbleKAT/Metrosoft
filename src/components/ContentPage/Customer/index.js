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
    content: ["HIS 사업부", "이용구", "이사", "yglee@metrosoft.co.kr/010-8877-2676"]
  },
  {
    title: "직위",
    content: ["ERP 사업부", "송병민", "부장", "bmsong@metrosoft.co.kr/010-3465-5448"]
  },
  {
    title: "이메일 주소",
    content: ["HealthCare 컨텐츠" , "육기호" , "부사장","/010-2839-4920"]
  },
  {
    content: ["통신 부가서비스","이광희","팀장","taesan-3@metrosoft.co.kr/010-9038-8613"]
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