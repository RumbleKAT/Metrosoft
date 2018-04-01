import React, { Component } from 'react';
import db from "./Cloud.json";
import RoundTitle from "../RoundTitle";
import PointDiv from "../pointDiv";
import description from "../../../Image/cloud.png";
import LabelContent from "../LabelContent";
import ContentList from "../ContentList";

const imgLeftStyle = {
  width: "110px",
  height:"105px",
  float: "left",
  margin: "50px 30px 30px 130px",
  padding:"10px"
};

const imgCenterStyle = {
  padding: "10px",
  width: "35%",
  minWidth: "270px",
  margin: "0px auto 0px",
  overflow: "hidden"
};

const path = process.env.PUBLIC_URL + "/images/Cloud";

class Cloud extends Component {

  constructor(props){
    super(props);
    this.state = {
      url : this.props.url
    }
  }

  loadTitle = obj => {
    return (
      <div style={{ padding: "50px" }}>
        <PointDiv onTitle={"Metro-cERP"} />
        <RoundTitle onTitle={obj.title} />
        <div style={{fontSize:"18px",marginTop:"100px",marginLeft:"20px"}}>{obj.content}</div>
      </div>
    );
  };

  loadImg = () => {
    return (
      <div style={imgCenterStyle}>
        <img src={description} alt="obj" style={{ width: "100%",height:"100%" }} />
      </div>
    );
  };
  loadFeatures = obj => {
    return <div style={{ marginBottom: "50px" }}>
        <div style={{ padding: "50px 0 0 50px" }}>
          <div style={{marginBottom:"100px"}}>
            <RoundTitle onTitle={"주요 특징"} />
          </div>
        </div>
        {obj.map((el, i) => {
          return <div style={{ marginTop: "50px" }} key={i}>
              <div style={{ minWidth: "280px" }}>
                <img src={path + el.image} alt="obj" style={imgLeftStyle} />
              </div>
              <div style={{ minWidth: "280px", overflow: "hidden", padding: "50px" }}>
                <h2>{el.title}</h2>
                <div style={{ fontSize: "15px" }}>
                  {el.contents.split("|").map((e, i) => {
                    return <p key={i}>{e}</p>;
                  })}
                </div>
              </div>
            </div>;
        })}
      </div>;
  };

  loadEffects = (obj) => {
    return <div style={{ marginTop: "50px" }}>
        {obj.map((el, i) => {
          return <div key={i} style={{ padding: "50px 0px 0px 50px" }}>
              <LabelContent onTitle={el.title}/>
              <ContentList OnContent={el.contents} />
            </div>;
        })}
      </div>;
  }

  componentDidMount(){

  }

  render() {
    return (
      <div>
        {this.loadTitle(db.Title)}
        {this.loadImg()}
        {this.loadFeatures(db.features)}
        {this.loadEffects(db.effects)}
      </div>
    );
  }
}

export default Cloud;