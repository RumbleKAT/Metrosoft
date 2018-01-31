import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { withRouter } from "react-router";

export default function(WrappedComponent){
class ResetWindowScroll extends Component {

        componentDidUpdate = (prevProps) => {
            this.props.location !== prevProps.location && window.scrollTo(0,0);
        }
        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }
    return withRouter(ResetWindowScroll);
}
