import React, { Component } from 'react';
import FaPhoneSquare from "react-icons/lib/fa/phone-square";
import style from "./style.scss";
import paper from "../../Image/paper.jpg";
class HotLine extends Component {

    render() {
        return <div style={{ overflow: "hidden", padding:"50px",marginTop:"500px"}}>
            <div style={{width: "70%", minWidth : "300px" , height : "300px", float: "left"}}>
            <img src={paper} alt={"paper"} style={{width : "100%" , height : "240px"}}/>
            </div>
            <div className={style.Hotline}>
              <div className={style.top}>
                <FaPhoneSquare size={28} />
                <span style={{fontSize:"23px" , fontWeight:"bold", marginLeft:"25px",padding:"10px"}}>대표전화</span>
              </div>
              <div style={{ padding: "20px 20px 0px 30px",lineHeight:"1.2em"} }>
                <ol>
                  <li>평일 : 09 : 00 ~ 18 : 00</li>
                  <li>토요일 : 09 : 00 ~ 12 : 00</li>
                </ol>
                <div className={style.content}>031-465-9971~3</div>
              </div>
              <div style={{padding: "10px"}}>
                <a href="/customer" className="ui compact labeled icon teal button" style={{position:"inherit"}}>
                    <span style={{marginRight:"35px"}}>문의하기</span>
                </a>
              </div>
            </div>
          </div>;
    }
}

export default HotLine;