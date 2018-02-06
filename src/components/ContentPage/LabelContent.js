import React, { Component } from 'react';

class LabelContent extends Component {

    constructor(props){
        super(props);
        this.state = {
            title : this.props.onTitle,
            color : this.props.onColor,
            line : this.props.onAddLine
        }
        console.log(this.state);
        this.loadAddLine = this.loadAddLine.bind(this);
        this.loadLabel = this.loadLabel.bind(this);
    }

    loadAddLine(){
        return this.state.line ?
          <div style={{ marginTop: "30px" }}>
              <div style={{ width:"100%" ,height: "2px", background: this.state.color }} />
          </div> : null;
    }

     loadLabel(){
        return <div className="ui label">
            <i className="chevron right icon" />
            {this.state.title}
          </div>;
     }
    render() {
        return (
            <div>
                {this.loadLabel()}
                {this.loadAddLine()}
            </div>
        );
    }
}

LabelContent.defaultProps = {
    onTitle : "",
    onColor : "#000",
    onAddLine : false
};

export default LabelContent;