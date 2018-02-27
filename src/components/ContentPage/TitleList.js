import React, { Component } from 'react';

class TitleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objects: this.props.object
    };
    this.init = this.init.bind(this);
  }

  init(objects) {
    return (
        <div className="ui celled horizontal list" style={{border:"solid 2px #dfdfdf",padding:"20px",borderRadius:"4px"}} >
            {
                objects.map((obj,i) => {
                    return <a className="item" key={i} style={{ position: "inherit", fontSize: "15px", color: "rgb(22, 155, 155)", fontWeight:"bold" }} href={'#'+obj}>
                        {obj}
                      </a>;
            })}
        </div>
    );
  }

  render() {
    return <div style={{width:"100%",textAlign:"center",marginTop:"50px",padding:"50px"}}>
        {this.init(this.state.objects)}
        </div>;
  }
}

export default TitleList;