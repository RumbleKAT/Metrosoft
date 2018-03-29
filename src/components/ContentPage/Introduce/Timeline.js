import React from "react";
import styles from "./styles.scss";
import PointDiv from "../pointDiv";
import { Header, Segment } from "semantic-ui-react";
import Axios from 'axios';


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
      color: "#fff",
      float:"left"
    };

    const boxLabel = {
      float:"left",padding:"20px",
      width:"76%",
      minWidth:"350px"
    };

class Timeliner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      object: false,
      dir: this.props.dir,
      url: this.props.url,
      load: "Timeline"
    };

    this._loadContent = this._loadContent.bind(this);
    this._loadDetail = this._loadDetail.bind(this);
    this._loadTitle = this._loadTitle.bind(this);
    this._loadDetailContent = this._loadDetailContent.bind(this);
    this.upDated = this.upDated.bind(this);
  }

  upDated(response) {
    this.setState({ object: response });
  }

  componentDidMount() {
    Axios.get('/Introduce/Timeline.json')
      .then(res => {
        const answer = res.data;
        this.upDated(answer);
      })
      .catch(err => {
        console.log(err);
      });
  }

  _loadTitle = obj => {
    return (
      <div>
        <div style={{ padding: "10px", marginTop: "100px" }}>
          <PointDiv onTitle={"회사소개"} />
        </div>
        <div style={{ marginBottom: "50px" }}>
          <div style={{ alignContent: "center", padding: "50px 20% 50px 5%" }}>
            <ol className={styles.rectangleList}>
              <li>
                <div style={box}>사업자명</div>
                <div style={boxLabel}>{obj["company"]}</div>
              </li>
              <li>
                <div style={box}>대표자</div>
                <div style={boxLabel}>{obj["ceo"]}</div>
              </li>
              <li>
                <div style={box}>사업자분야</div>
                <div style={boxLabel}>{obj["area"]}</div>
              </li>
              <li>
                <div style={box}>주소</div>
                <div style={boxLabel}>{obj["address"]}</div>
              </li>
              <li>
                <div style={box}>전화번호</div>
                <div style={boxLabel}>{obj["tel"]}</div>
              </li>
              <li>
                <div style={box}>회사설립연도</div>
                <div style={boxLabel}>{obj["birth"]}</div>
              </li>
              <li>
                <div style={box}>홈페이지</div>
                <div style={boxLabel}>{obj["homepage"]}</div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  };

  _loadDetail = obj => {
    var total = "";

    for (let index = 0; index < obj["content"].length; index++) {
      const element = obj["content"][index];
      total += element;
      total += "/";
    }

    return (
      <div>
        {total.split("/").map((line, i) => {
          return line.toString() === "" ? null : (
            <li key={i}>
              <a href="">{line.toString()}</a>
            </li>
          );
        })}
      </div>
    );
  };

  _loadContent = obj => {
    return (
      <div style={{ padding: "50px" }}>
        <Header
          as="h2"
          color="teal"
          attached="top"
          style={{ borderTop: "solid 2px rgb(22, 155, 155)" }}
        >
          {obj["year"]}
        </Header>
        <Segment
          attached
          style={{ position: "inherit", background: "#dfdfdf" }}
        >
          {this._loadDetailContent(obj["content"])}
        </Segment>
      </div>
    );
  };

  //resolution change 1028 300

  _loadDetailContent = objects => {
    return (
      <div className="ui segments" style={{ position: "inherit" }}>
        {objects.map((obj, i) => {
          return (
            <div
              key={i}
              className="ui segment"
              style={{ position: "inherit", fontWeight: "500" }}
            >
              <div style={{ fontSize: "15px" }}> {obj}</div>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    if(!this.state.object) {
      return "loading...";
    }
    else{
      return <div className={styles.TimelineStyle}>
          {this._loadTitle(this.state.object.init)}
          <div style={{ padding: "30px", marginBottom: "50px", marginTop: "100px" }}>
            <div style={{ padding: "30px", overflow: "hidden" }}>
              <PointDiv onTitle={"연혁"} />
            </div>
            <div>
              {this.state.object["content"].reverse().map((object, i) => {
                return <div key={i}>{this._loadContent(object)}</div>;
              })}
            </div>
          </div>
        </div>;
    }
  }
}

export default Timeliner;
