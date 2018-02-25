import React, { Component } from 'react';
import style from './style.scss';
import EMR from "../../Image/product_icons/EMR.svg";
import iEMR from "../../Image/product_icons/iEMR.svg";
import OCS from "../../Image/product_icons/OCS.svg";
import mEAMS from "../../Image/product_icons/mEAMS.svg";
import mPOC from "../../Image/product_icons/mPOC.svg";
import ERP from "../../Image/product_icons/ERP.svg";
import CRM from "../../Image/product_icons/CRM.svg";

var arr = [];

arr.push(EMR);
arr.push(iEMR);
arr.push(OCS);
arr.push(mPOC);
arr.push(mEAMS);
arr.push(ERP);
arr.push(CRM);

const contents = {
    title : 'Metrosoft의 제품을 활용하세요',
    lists : ['EMR','iEMR','OCS','mPOC','mEAMS','ERP','CRM']
};

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
        return <div style={{marginTop:"50px",width:"10%",minWidth:"300px",padding:"20px",borderRadius:"5px",border:"solid 3px #dfdfdf",float:"left",marginLeft:"30px"}}>
            <img src={obj} alt="EMR" style={{ width: "120px", height: "100px",marginLeft:"25%",padding:"10px" }}/>
            <div style={{fontSize:"20px",fontWeight:"bold",padding:"5px",textAlign:"center" , color:"#169b9b"}}>{contents.lists[i]}</div>
          </div>;
    }


    render() {
        return <div style={{ padding: "50px" }}>
            {this.title()}
            {arr.map((element,i)=>{
                return(
                    <div key={i}>
                        {this.content(element,i)}
                    </div>
                )
            })}
          </div>;
    }
}

export default productList;