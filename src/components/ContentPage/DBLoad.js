import React, { Component } from "react";
import ceointroduce from "../../database/CeoIntroduce.json";
//import organization from "../../database/Organization.json";
//import timeline from "../../database/Timeline.json";


class DBLoad extends Component{ 

    constructor(props){
        super(props);
            console.log("props index : " + props.index);
    
            this.state = {
                name : ""
            }

            if (props.index === -1) {
            console.log("nothing selected!");
            } else {
                
            switch (props.index) {
                
            case 1:
                console.log("ceo");
                this.state.name = "ceointroduce";
                break;
            case 2:
                console.log("organization");
                this.state.name = "organization";
                break;
            case 3:
                console.log("timeline");
                this.state.name = "timeline";
                break;
            default:
                console.log("not yet!");
                this.state.name = "not yet!";
                break;
            }
        }

        this._loadData = this._loadData.bind(this);
    };   
    
    _loadData = (data) => {
        //data를 파라미터로 갖는 loaddata 함수 
        console.log(JSON.stringify(ceointroduce));
    }

    render(){
        return(
           <div>
               <h2>{this.props.index}</h2>
               <p>{this.state.name}</p>
               <button onClick={this._loadData} data={this.state.name}>LoadData</button>
           </div>
        );
    }

}


DBLoad.defaultProps = {
    index : -1
};


export default DBLoad; 