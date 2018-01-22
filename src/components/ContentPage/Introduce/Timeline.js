import React from "react";
import propTypes from "prop-types";
import styles from "./styles.scss";
import { Timeline, TimelineEvent } from "react-event-timeline";
import * as actions from "../../../actions/ActionTypes";


class Timeliner extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  render() {
    const title = { fontSize: "30px", fontWeight: "bold", color: "#363636" };
    const bubbleStyle = {
      position: "absolute",
      top: "0px",
      left: "0px",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      marginLeft: "1px",
      background: "#fff",
      border: "3px solid #169b9b",
      display: "flex"
    };
    const contentStyle = { fontSize: "15px", fontWeight: "400" };

    return (
      <div className={styles.TimelineStyle}>
        <div />
        <Timeline>
          <TimelineEvent
            titleStyle={title}
            title="2017"
            bubbleStyle={bubbleStyle}
            contentStyle={contentStyle}>
            <li>
              I received the payment for $543. Should be shipping the item
              within a couple of hours.
            </li>
          </TimelineEvent>
        </Timeline>
      </div>
    );
  }
}


export default Timeliner;
