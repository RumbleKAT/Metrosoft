import React, { Component } from 'react';
import styles from "./Business.scss";
import Pointdiv from "../pointDiv";
import Axios from "axios";


function openNewTab(url){
    var win = window.open(url, "_blank");
    win.focus();
}

function checkSize(title){
    if (title.indexOf("서울 척병원") !== -1 || title.indexOf("김형근") !== -1 )
    {
        return ImgStyleSub;
    }else{
        return ImgStyle;
    }
}
const divStyle = { overflow: "hidden", padding: "40px", marginBottom: "100px" };
const path =  process.env.PUBLIC_URL + "/Hospital_icon";
const ImgStyle = { float: "left", padding: "20px 0px 20px 30px"  , height: "100px", margin: "30px 0 50px 0"};
const ImgStyleSub = { float: "left", padding: "20px" , margin: "30px 0 50px 0"};
class Target extends Component {
  constructor(props) {
    super(props);
    this.state = {
      object: false,
      dir: this.props.dir,
      url: this.props.url,
      load: "Hospital"
    };
    this.OnLoad = this.OnLoad.bind(this);
    this.upDated = this.upDated.bind(this);
  }

  upDated(response) {
    this.setState({ object: response });
  }

  componentDidMount() {
    Axios.get(this.state.url + this.state.load + "&dir=" + this.props.dir)
      .then(res => {
        const answer = res.data;
        this.upDated(answer);
      })
      .catch(err => {
        console.log(err);
      });
  }

  OnLoad() {
    return (
      <div>
        {this.state.object.content.map(function(icon, i) {
          return (
            <div
              className={styles.Target}
              style={checkSize(icon.title)}
              key={i}
            >
              <img
                src={path + icon.img}
                alt={icon.title}
                className={styles.customer}
                onClick={() => openNewTab(icon.url)}
              />
            </div>
          );
        })}
      </div>
    );
  }

  render() {
   if(!this.state.object){
       return "loading..."
   }else{
        return (
        <div>
            <Pointdiv onTitle={"주요 고객사"} />
            <div style={divStyle}>{this.OnLoad()}</div>
        </div>
        );
    }
  }
}

export default Target;