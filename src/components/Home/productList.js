import React, { Component } from 'react';
import EMR from "../../Image/product_icons/EMR.svg";
import iEMR from "../../Image/product_icons/iEMR.svg";
import OCS from "../../Image/product_icons/OCS.svg";
//import mEAMS from "../../Image/product_icons/mEAMS.svg";
import T_Biz from "../../Image/product_icons/mPOC.svg";
import ERP from "../../Image/product_icons/ERP.svg";
import CRM from "../../Image/product_icons/CRM.svg";

var arr = [];

arr.push(EMR);
arr.push(iEMR);
arr.push(OCS);
arr.push(T_Biz);
arr.push(ERP);
arr.push(CRM);

const contents = {
  title: "Metrosoft의 제품을 활용하세요",
  lists: ["EMR", "iEMR", "OCS", "T-BIZ", "ERP", "CRM"]
};

function check(obj){
  if(obj.indexOf("T-BIZ") !== -1){
    return "T-BIZ 모바일 EMR"
  }else{
    return obj;
  }
}

class productList extends Component {

    constructor(props){
        super(props);
        this.title = this.title.bind(this);
        this.content = this.content.bind(this);
    }

    title(){
        return <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "30px", fontWeight: "bold",lineHeight:"1.1em"}}>
              {contents.title}
            </span>
            <div style={{ width : "30%", height:"3px",background:"rgb(22, 155, 155)" ,marginLeft:"35%",marginTop:"10px"}}></div>
          </div>;
    }
    content(obj,i){
        return <div style={{ marginTop: "50px", width: "10%", minWidth: "150px", padding: "20px", borderRadius: "5px", float: "left", marginRight: "6%", textAlign:"center" }}>
            <img src={obj} alt="EMR" style={{ width: "120px", height: "100px", padding: "10px" }} />
            <div style={{ textAlign: "center", marginTop: "5px" }}>
              <a className="ui teal basic button" href={"./product/#" + check(contents.lists[i])}>
                {contents.lists[i]}
              </a>
            </div>
          </div>;
    }


    render() {
        return <div style={{ padding: "50px",overflow:"hidden"}}>
            {this.title()}
            <div style={{width:"100%",marginLeft:"10px",padding:"60px",height:"400px"}}>
              {arr.map((element, i) => {
                return <div key={i}>{this.content(element, i)}</div>;
              })}
            </div>
          </div>;
    }
}

export default productList;