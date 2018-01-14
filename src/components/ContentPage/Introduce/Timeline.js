import React, { Component } from "react";
import DBLoad from "../DBLoad";
import styles from "./styles.scss";
import { Timeline, TimelineEvent } from "react-event-timeline";

class Timeliner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: this.props.index
    };
  }

  render() {
    const styleadd = { background: "#d0d0d0" };
    const titleStyle = { "fontSize" : "20px", "fontWeight" : "bold" };
    return <div style={styleadd}>
        <Timeline>
          <TimelineEvent titleStyle={titleStyle} title="2017">
            I received the payment for $543. Should be shipping the item within a couple of hours.
          </TimelineEvent>
          <TimelineEvent title="You sent an email to John Doe" createdAt="2016-09-11 09:06 AM" icon={<i className="material-icons md-18">
                email
              </i>}>
            Like we talked, you said that you would share the shipment details? This is an urgent order and so I am losing patience. Can you expedite the process and pls do share the details asap. Consider this a gentle reminder if you are on track already!
          </TimelineEvent>
        </Timeline>
      </div>;
  }
}

export default Timeliner;
