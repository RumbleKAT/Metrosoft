import React, { Component } from 'react';
//import style from "./style.scss";
//import paper from "../../Image/phone.jpg";
import PointDiv from "../ContentPage/pointDiv";


const data = {
  title: "이용안내",
  content: [
    {
      title: "평일",
      description: "09:00 ~ 18:00"
    },
    {
      title: "주말",
      description: "09:00 ~ 12:00"
    },
    {
      title: "대표전화",
      description: "031-465-9971"
    }
  ]
};

const textStyle ={
  textAlign : "center"
}
class HotLine extends Component {

  loadTitle = () => {
    return (
        <PointDiv onTitle={"전화번호"}/>
    );
  };

  loadTable = (obj) =>{
    console.log(obj);
      return <table className="ui celled table" style={{marginTop:"50px"}}>
          <thead>
            <tr>
              <th colSpan="2" style={textStyle}>
                {obj.title}
              </th>
            </tr>
          </thead>
          <tbody>
            {obj.content.map((el, i) => {
              return <tr key={i}>
                  <td style={textStyle}>{el.title}</td>
                  <td style={textStyle}>{el.description}</td>
                </tr>;
            })}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="2" style={{textAlign:"center"}}>
                <a href="/customer" className="ui compact labeled icon teal button" style={{ position: "inherit" }}>
                  <div style={{marginRight:"40px"}}>문의하기</div>
                </a>
              </th>
            </tr>
          </tfoot>
        </table>;
  }



  render() {
    return <div style={{ padding: "50px"}}>
        {this.loadTitle()}
          <div style={{width:"70%",marginLeft:"auto",marginRight:"auto"}}>{this.loadTable(data)}</div>
      </div>;
  }
}

export default HotLine;