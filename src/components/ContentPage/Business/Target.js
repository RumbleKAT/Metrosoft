import React, { Component } from 'react';
import icons from "../../../database/Hospital.json";
import styles from "./Business.scss";

function openNewTab(url){
    var win = window.open(url, "_blank");
    win.focus();
}

const path =  process.env.PUBLIC_URL + "/Hospital_icon";

class Target extends Component {

    constructor(props){
        super(props);
        this.state = {
            title : ""
        }
        this.OnLoad = this.OnLoad.bind(this);
        this.OnMoveLink = this.OnMoveLink.bind(this);
    }

    OnLoad(){

        return  (
            <div>
            </div>
        );
    }

    OnMoveLink(name){
        console.log("clicked!" + name);
    }
    render() {
        return <div>
            <div>
              <img className={styles.customer} src={path + icons["content"][0]["img"]} alt="메트로 병원" onClick={() => this.OnMoveLink("메트로")} />
            </div>
            <div>
              <img className={styles.customer} src={path + icons["content"][2]["img"]} alt="분당 신우병원" />
            </div>
          </div>;
    }
}

export default Target;