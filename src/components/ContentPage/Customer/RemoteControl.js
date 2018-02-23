import React, { Component } from 'react';
import connectIcon from "../../../Image/connect.svg";
class RemoteControl extends Component {
    render() {
        return <div>
            <div style={{ overflow: "hidden", width: "90%", margin: "auto", padding: "50px" }}>
              <div style={{ width: "160px", height: "160px", marginLeft: "50px", padding: "20px", float: "left", marginTop:"10px" }}>
                <img style={{ float: "left" }} src={connectIcon} alt="원격지원" />
              </div>
              <div style={{ float: "left", padding: "20px" }}>
                <h2 style={{ color: "#169b9b" }}>
                  원격으로 쉽고 빠르게!
                </h2>
                <span>
                  본 서비스 이용시 발생하는 장애로 인해 시스템 어려움이 있는 경우, <br />
                  원격 지원을 이용해 해당 컴퓨터로 원격 접속 후 문제점을 해결해 드리는 서비스입니다.
                </span>
                <div style={{ padding: "15px 0 10px 0px" }}>
                  <a className="ui teal basic button" href="http://www.metrosoft.co.kr/Remote/TeamViewerQS-idc3g4qy58.exe">
                    이용하기
                  </a>
                </div>
              </div>
              <div />
            </div>
          </div>;
    }
}

export default RemoteControl;