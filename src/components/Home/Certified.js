import React, { Component } from 'react';
import PointDiv from "../ContentPage/pointDiv";
import MS from "../../Image/Certified/01.png";
import HP from "../../Image/Certified/02.png";
import OCS from "../../Image/Certified/03.png";

const style = { minWidth: "280px", float:"left" ,width:"30%",padding:"10px",marginLeft:"15px",textAlign:"center"};
class Certified extends Component {

    loadTitle = () =>{
        return <div style={{ padding: "50px",overflow:"hidden"}}>
            <PointDiv onTitle={"Certified Partnership"} />
            <div style={{ width: "100%" }}>
              <div style={style}>
                <img src={MS} alt={"MS"} style={{ width: "260px" }} />
              </div>
              <div style={style}>
                <img src={HP} alt={"Hp"} style={{ width: "260px" }} />
              </div>
              <div style={style}>
                <img src={OCS} alt={"OCS"} style={{ width: "260px" }} />
              </div>
            </div>
          </div>;
    }

    render() {
        return (
            <div>
                {this.loadTitle()}
            </div>
        );
    }
}

export default Certified;