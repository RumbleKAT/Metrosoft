import React, { Component } from "react";
import style from "./styles.scss";
import organization from "../../../Image/organization.png";
import PointDiv from "../pointDiv";
import Axios from 'axios';
class Organization extends Component {
  constructor(props) {
    super(props);

    this.state = {
      object: false,
      dir: this.props.dir,
      url: this.props.url,
      load: "Organization"
    };

    this._loadData = this._loadData.bind(this);
    this.upDated = this.upDated.bind(this);
  }

  upDated(response) {
    this.setState({ object: response });
    //console.log(this.state.object);
  }

  componentDidMount() {
    Axios.get('/Introduce/Organization.json')
      .then(res => {
        const answer = res.data;
        this.upDated(answer);
      })
      .catch(err => {
        console.log(err);
      });
  }

  _loadData = obj => {
    return (
      <div style={{ marginTop: "20px" }}>
        <li>{this.state.object["updata_date"]}</li>
        <br />
        <li> 총원 : {obj["total"]}</li>
        <br />
        <li> 현재 인원 : {obj["now"]}</li>
        <br />
        <li> 추가예정인원 : {obj["add"]}</li>
        <br />
      </div>
    );
  };

  render() {
    if(!this.state.object){
      return "loading....";
    }
    else {
      return (
        <div>
          <div style={{ padding: "20px" }}>
            <PointDiv onTitle={"조직도"} />
          </div>
          <div className={style.boxes}>
            <div className={style.container}>
            {/*
              <div
                style={{
                  fontSize: "1em",
                  float: "right",
                  fontWeight: "400",
                  padding: "20px",
                  border: ".2em solid #dfdfdf",
                  borderRadius: "2em"
                }}
              >
               {this._loadData(this.state.object)} 
              </div>
              */}
              <div
                style={{
                  minWidth: "300px",
                  textAlign: "center"
                }}>
                <img
                  style={{ minWidth: "300px", width:"50%" }}
                  src={organization}
                  alt="조직도"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Organization;
