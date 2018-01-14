import React, { Component } from 'react';
import CEOIntroduce from "./CeoIntroduce";
import Oragnization from "./Organization";
import Timeliner from "./Timeline";
import Map from "./map";


class Introduce extends Component {

    render() {
        return <div>
            <CEOIntroduce index={1} />
            <Timeliner index={3} />
            <Oragnization index={2} />
            <Map />
          </div>;
    }
}

export default Introduce;