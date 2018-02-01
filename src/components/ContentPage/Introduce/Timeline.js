import React from "react";
import styles from "./styles.scss";
import { Timeline, TimelineEvent } from "react-event-timeline";
import PointDiv from "../pointDiv";

 const box = {
      fontWeight : "500",
      padding: "7px",
      left: "-2.5em",
      top: "50%",
      marginTop: "1em",
      background: "#169b9b",
      width: "120px",
      height: "1.7em",
      lineHeight: "1em",
      textAlign: "center",
      borderRadius : "5%",
      color: "#fff"
    };
class Timeliner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      object : this.props.object
    }
  
    this._loadContent = this._loadContent.bind(this);
    this._loadDetail = this._loadDetail.bind(this);
    this._loadTitle = this._loadTitle.bind(this);
  };

  _loadTitle = obj => {

    return (<div>
      <div style={{padding: "10px" , marginTop:"50px"}}>
        <PointDiv onTitle={"회사소개"}/>
      </div>
        <div>
          <div style={{alignContent:"center", padding: "50px 20% 50px 10%"}}>
            <ol className={styles.rectangleList}>
              <li>
                <div style={box}>사업자명</div> <a href="">
                  {obj["company"]}
                </a>
              </li>
              <li>
                <div style={box}>대표자</div>
                <a href="">{obj["ceo"]}</a>
              </li>
              <li>
                <div style={box}>사업자분야</div>
                <a href="">{obj["area"]}</a>
              </li>
              <li>
                <div style={box}>주소</div>
                <a href="">{obj["address"]}</a>
              </li>
              <li>
                <div style={box}>전화번호</div>
                <a href="">{obj["tel"]}</a>
              </li>
              <li>
                <div style={box}>회사설립연도</div>
                <a href="">{obj["birth"]}</a>
              </li>
              <li>
                <div style={box}>홈페이지</div>
                <a href="">{obj["homepage"]}</a>
              </li>
            </ol>
          </div>
        </div>
    </div>);
  }

  _loadDetail = obj => {
    var total = "";
    
    for (let index = 0; index < obj["content"].length; index++) {
      const element = obj["content"][index];
      total += element;
      total += '/';
    }

    return (
      <div>
        {
          total.split('/').map((line,i) => {
              return(line.toString() === "" ? null : <li key={i}><a href="">{line.toString()}</a></li>);
          }
        )
        }
      </div>
    );
  }

  _loadContent = obj => {
    var content = obj["content"];

    const title = { fontSize: "30px", fontWeight: "bold", color: "#363636" ,padding: "3px" };
    const bubbleStyle = { position: "absolute", top: "0px", left: "0px", borderRadius: "50%", width: "35px", height: "35px", marginLeft: "1px", background: "#fff", border: "3px solid #169b9b", display: "flex" };
    const contentStyle = { fontSize: "15px", fontWeight: "400", width: "auto" ,backgroundColor : "none", boxShadow : "none" ,marginTop:"0", marginBottom:"0"};

    return (
    content.reverse().map((object , i ) => {
      return <TimelineEvent titleStyle={title} title={object.year} bubbleStyle={bubbleStyle} contentStyle={contentStyle} key={i}>
          <ol className={styles.roundedList}>
            {this._loadDetail(obj.content[i])}
          </ol>
        </TimelineEvent>;
    })
  );

  }

  render() {
    return (
      <div className={styles.TimelineStyle}>
          {this._loadTitle(this.state.object["init"])}
        <div style={{padding: "30px" , marginBottom: "50px"}}>
        <div style={{padding: "30px"}}>
          <PointDiv onTitle={"연혁"}/>
        </div>
        <Timeline>
          {this._loadContent(this.state.object)}
        </Timeline>
        </div>
      </div>
    );
  }
}


export default Timeliner;
