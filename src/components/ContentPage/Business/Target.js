import React, { Component } from 'react';
import icons from "../../../database/Hospital.json";
import styles from "./Business.scss";
import Pointdiv from "../pointDiv";

function openNewTab(url){
    var win = window.open(url, "_blank");
    win.focus();
}

const path =  process.env.PUBLIC_URL + "/Hospital_icon";

class Target extends Component {

    constructor(props){
        super(props);
        this.state = {
            objects : icons["content"]
        }
        this.OnLoad = this.OnLoad.bind(this);
    }

    OnLoad(){

        const ImgStyle = { float: "left", padding: "50px" , width: "inherit" , height: "100px", margin: "30px 0 50px 0"};

        return  (
            <div>
                {this.state.objects.map(function(icon , i) {
                    return (
                        <div style={ImgStyle} key={i}>
                          <img src={path + icon.img} alt={icon.title} className={styles.customer} onClick={() => openNewTab(icon.url)} />
                        </div>);
                })}
            </div>
        );
    }
    
    render() {
        const divStyle = { overflow: "hidden" ,padding: "40px" };
        return <div>
            <Pointdiv onTitle={"주요 고객사"}/>
            <div style={divStyle}>{this.OnLoad()}</div>
          </div>;
    }
}

export default Target;