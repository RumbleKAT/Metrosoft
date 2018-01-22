import React from "react";
import propTypes from "prop-types";
import styles from "./styles.scss";
import { Timeline, TimelineEvent } from "react-event-timeline";
import * as actions from "../../../actions/ActionTypes";


class Timeliner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      object : this.props.object
    }
  
    this._loadContent = this._loadContent.bind(this);
    this._loadDetail = this._loadDetail.bind(this);
  };

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
          total.split('/').map(line => {
              return(line.toString() === "" ? null : <li><a href="">{line.toString()}</a></li>);
          }
        )
        }
      </div>
    );
  }

  _loadContent = obj => {
    var content = obj["content"];

    const title = { fontSize: "30px", fontWeight: "bold", color: "#363636" };
    const bubbleStyle = { position: "absolute", top: "0px", left: "0px", borderRadius: "50%", width: "30px", height: "30px", marginLeft: "1px", background: "#fff", border: "3px solid #169b9b", display: "flex" };
    const contentStyle = { fontSize: "15px", fontWeight: "400", width: "auto" };

    return (
    content.reverse().map((object , i ) => {
      return <TimelineEvent titleStyle={title} title={object.year} bubbleStyle={bubbleStyle} contentStyle={contentStyle}>
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
        <Timeline>
          {this._loadContent(this.state.object)}
        </Timeline>
      </div>
    );
  }
}


export default Timeliner;
