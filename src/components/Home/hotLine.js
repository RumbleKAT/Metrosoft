import React, { Component } from 'react';
import style from "./style.scss";
import paper from "../../Image/phone.jpg";
class HotLine extends Component {

    render() {
        return <div style={{ overflow: "hidden", padding:"50px",minWidth:"260px"}}>
            <div className={style.ipad}>
            <img src={paper} alt={"paper"} style={{width : "100%" , height : "240px",borderRadius:"4px"}}/>
            </div>
            <div className={style.Hotline}>
              <div className={style.top}>
                <div style={{fontSize:"30px" , fontWeight:"bold", marginLeft:"30px",padding:"10px"}}>대표전화</div>
              </div>
              <div style={{ padding: "15px",lineHeight:"1.2em"} }>
                <ol>
                  <li>평일 : 09 : 00 ~ 18 : 00</li>
                  <li>토요일 : 09 : 00 ~ 12 : 00</li>
                </ol>
                <div className={style.content}>031-465-9971~3</div>
              </div>
                <a href="/customer" className="ui compact labeled icon teal button" style={{position:"inherit"}}>
                    <span style={{marginRight:"35px"}}>문의하기</span>
                </a>
            </div>
          </div>;
    }
}

export default HotLine;