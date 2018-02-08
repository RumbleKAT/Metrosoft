import React, { Component } from 'react';
import Target from "./Target";
import MetroHIS from "./MetroHIS";
import Commercial from "./Commercial";
import VoIP from "./VOIP";

class Business extends Component {
    render() {
        return <div>
            <MetroHIS />
            <VoIP/>
            <Target />
          </div>;
    }
}

export default Business;