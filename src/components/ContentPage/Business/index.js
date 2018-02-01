import React, { Component } from 'react';
import Target from "./Target";
import MetroHIS from "./MetroHIS";

class Business extends Component {
    render() {
        return (
            <div>
                <MetroHIS/>
                <Target/>
            </div>
        );
    }
}

export default Business;