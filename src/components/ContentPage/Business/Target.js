import React, { Component } from 'react';
import icons from "../../../database/Business/Hospital.json";
import styles from "./Business.scss";
import Pointdiv from "../pointDiv";

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

const path =  process.env.PUBLIC_URL + "/Hospital_icon";
const ImgStyle = { float: "left", padding: "20px"  , height: "100px", margin: "30px 0 50px 0"};
const ImgStyleSub = { float: "left", padding: "20px" , margin: "30px 0 50px 0"};

class Target extends Component {

    constructor(props){
        super(props);
        this.state = {
            objects : icons["content"]
        }
        this.OnLoad = this.OnLoad.bind(this);
    }

    OnLoad(){

        return  (
            <div>
                {this.state.objects.map(function(icon , i) {
                    return (
                        <div style={(checkSize(icon.title))} key={i}>
                          <img src={path + icon.img} alt={icon.title} className={styles.customer} onClick={() => openNewTab(icon.url)} />
                        </div>);
                })}
            </div>
        );
    }

    render() {
        const divStyle = { overflow: "hidden" ,padding: "40px", marginBottom : "100px" };
        return <div>
            <Pointdiv onTitle={"주요 고객사"}/>
            <div style={divStyle}>{this.OnLoad()}</div>
          </div>;
    }
}

export default Target;