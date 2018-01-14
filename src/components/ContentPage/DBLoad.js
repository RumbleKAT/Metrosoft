import { Component } from "react";
import ceointroduce from "../../database/CeoIntroduce.json";
import organization from "../../database/Organization.json";
import timeline from "../../database/Timeline.json";


class DBLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: -1,
      object: []  
    };

    if (props.index === -1) {
      console.log("nothing selected!");
    } else {
      switch (props.index) {
        case 1:
          this.state.object = ceointroduce;
          break;
        case 2:
          console.log("organization");
          this.state.object = organization;
          break;
        case 3:
          console.log("timeline");
          this.state.object = timeline;
          break;
        default:
          console.log("not yet!");
          break;
      }
    }

    this._loadData = this._loadData.bind(this);
    this._loadArraydata = this._loadArraydata.bind(this);
  }


  _loadData(temp) {
    //data를 파라미터로 갖는 loaddata 함수
    var result = null;
    console.log("key : " + this.props.result);

    result = temp[this.props.result];

    if (typeof result !== "object")
         console.log(result);
    else{
        console.log("It is object!" + this.props.keyIndex);
        result = result[this.props.keyIndex];
        console.log(result);
    }


    return result;
  }

  _loadArraydata(data) {}

  render() {
    return (
      this._loadData(this.state.object) 
    );
  }
}


DBLoad.defaultProps = {
    index : -1
};


export default DBLoad; 