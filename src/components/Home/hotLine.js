import React, { Component } from 'react';
import FaPhoneSquare from "react-icons/lib/fa/phone-square";
import style from "./style.scss";
class HotLine extends Component {

    render() {
        return <div style={{ overflow: "hidden", background: "#dfdfdf" }}>
            <div className={style.Hotline}>
              <h2>
                <FaPhoneSquare size={28} /> 고객센터 대표전화
              </h2>
              <div style={{ padding: "20px 20px 0px 30px" }}>
                <ol>
                  <li>평일 : 09 : 00 ~ 18 : 00</li>
                  <br />
                  <li>토요일 : 09 : 00 ~ 12 : 00</li>
                  <br />
                </ol>
                <span className={style.content}>031-465-9971~3</span> <br />
              </div>
              <div style={{padding: "10px"}}>
                <a href="/customer" className="ui compact labeled icon teal button">
                    <i class="help icon" />문의하기
                </a>
              </div>
            </div>
          </div>;
    }
}

export default HotLine;