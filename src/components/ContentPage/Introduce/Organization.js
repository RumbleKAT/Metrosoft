import React, { Component } from "react";
import style from "./styles.scss";
import organization from "../../../Image/조직도.svg";
import PointDiv from "../pointDiv";
class Organization extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: this.props.index,
      object : this.props.object 
    };

    this._loadData = this._loadData.bind(this);
  }

  _loadData = (obj) =>{

    return (
      <div style = {{lineHeight : "5%" , listStyle: "inherit" }}>
          <li>    총원    : {obj["total"]}</li><br/>
          <li>  현재 인원  : {obj["now"]}</li><br/>
          <li> 추가예정인원 : {obj["add"]}</li><br/>
      </div>
    );
  }

  render() {

    return(
    <div>
      <div style={{padding: "20px"}}>
        <PointDiv onTitle={"조직도"}/>
      </div>
    <div className={style.boxes}>
        <div className={style.container}>
          <div style={{ fontSize: "1em", float: "right", fontWeight: "400",padding : "10px" }}>
            {this.state.object["updata_date"]}
            <br/>
            {this._loadData(this.state.object)}
          </div>
          <div style={{ minWidth: "300px", width: "50%", display: "block", marginLeft: "auto", marginRight: "auto" }}>
            <img style={{minWidth : "300px"}} src={organization} alt="조직도" />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Organization;
