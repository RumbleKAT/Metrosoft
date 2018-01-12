import React, { Component } from 'react';
import DBLoad from "../DBLoad";

class Introduce extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            index : 1
        }
    };

    render() {
        return (
            <div>
                <h1>회사소개</h1>
                <DBLoad index={this.state.index}/>
            </div>
        );
    }
}

export default Introduce;