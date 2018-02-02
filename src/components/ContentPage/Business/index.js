import React, { Component } from 'react';
import Target from "./Target";
import MetroHIS from "./MetroHIS";
import Commercial from "./Commercial";

class Business extends Component {
    render() {
        return <div>
            <MetroHIS />
            <Commercial />
            <Target />
          </div>;
    }
}

export default Business;