import React, { Component } from 'react';

class ContentList extends Component {

    constructor(props){
        super(props);
        this.state = {
            objects : this.props.OnContent
        };
        this.loadData = this.loadData.bind(this);
    }

    loadData(objects){

        return(
            <div style={{padding:"10px" , marginTop: "20px"}}>
                <ul className="ui list">
                {
                    objects.map((obj,i) => {
                        return <div>
                            <li key={i}>{obj}</li><br/>
                          </div>;
                    })
                }
                </ul>
            </div>
        );
    }
    render() {
        return <div>{this.loadData(this.state.objects)}</div>;
    }
}

export default ContentList;