import React, { Component } from 'react';
import CEOIntroduce from "./CeoIntroduce";
import Oragnization from "./Organization";
import Timeliner from "./Timeline";
import Map from "./map";

import ceointroduce from "../../../database/CeoIntroduce.json";
import organization from "../../../database/Organization.json";
import timeline from "../../../database/Timeline.json";


class Introduce extends Component {

    constructor(props){
        super(props);
        this._loadFile = this._loadFile.bind(this);
    }

    _loadFile = (index) => {

        switch (index) {
            case 1:
                this.object = ceointroduce;
                break;
            case 2:
                this.object = organization;
                break;
            case 3:
                this.object = timeline;
                break;
            default:
                break;
        }
        return this.object;
    }

    render() {
        return <div>
            <CEOIntroduce object={this._loadFile(1)} />
            <Timeliner object={this._loadFile(3)}/>
            <Oragnization object={this._loadFile(2)} />
            <Map />
          </div>;
    }
}

export default Introduce;