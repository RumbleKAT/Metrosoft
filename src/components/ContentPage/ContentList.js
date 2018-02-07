import React, { Component } from 'react';

function CheckChild(objects, key) {
        //console.log(key);
        var keys = Object.keys(objects);
        if (keys.includes(key)) {
            return true;
        }else{
            return false;
        }
    }
class ContentList extends Component {

    constructor(props){
        super(props);
        this.state = {
            objects : this.props.OnContent,
            types : this.props.OnType,
            color : this.props.OnColor,
            key : this.props.OnKey,
        };
        this.loadData = this.loadData.bind(this);
        this.loadList = this.loadList.bind(this);
        this.loadSub = this.loadSub.bind(this);
        //console.log(this.state.objects);
    }

    loadSub(objects){
        return (
            objects.map((object, i)=> {
                return <div key={i}>
                    <li value="-" style={{ fontSize: "13px", marginBottom: "5px" }}>
                      {object.title}
                    </li><br/>
                  </div>;
            })
        )
    }

    loadList(objects){
        console.log(objects);
        return  <div>
                  <li value="*" style={{ fontSize: "13px", marginBottom: "5px" }}>
                    {objects.title}
                  </li>
                  <ol style={{ color: "#000" }}>
                    {Object.keys(objects).indexOf("contents") !== -1 ? this.loadSub(objects.contents) : null}
                  </ol><br/>
                </div>;
        }

        loadMap(objects){
            return (objects.map((object,i) => {
                            return (
                                <div key={i}>
                                    {this.loadList(object.content)}
                                </div>
                            );
                        })
            );
        }

    loadData(objects){

        if(this.state.types === "number"){

                return <div style={{ padding: "10px", marginTop: "20px" }}>
                    <ol className="ui list" >
                      {
                       objects.map((obj, i) => {
                           var check = CheckChild(obj,this.state.key);
                           if (check){
                               //involve subtitles
                               return <div key={i}>
                                        { this.loadList(obj) }
                                 </div>;
                           }else{
                                return (
                                    <div style={{ padding: "10px", marginTop: "20px" }}>
                                        <ol className="ui list" style={{ li: { color: this.state.color } }}>
                                        {
                                        objects.map((obj, i) => {
                                                return <div key={i}>
                                                    <li>{obj}</li>
                                                </div>;
                                        })}
                                        </ol>
                                    </div>
                                )
                           }
                      })}
                    </ol>
                  </div>;
            }
            else{

            return(
                <div style={{padding:"10px" , marginTop: "20px"}}>
                    <ul className="ui list">
                    {
                        objects.map((obj,i) => {
                            return <div key={i}>
                                <li>{obj}</li>
                                <br />
                              </div>;
                        })
                    }
                    </ul>
                </div>
            );
        }
    }

    render() {
        return <div>{this.loadData(this.state.objects)}</div>;
    }
}

ContentList.defaultProps = {
  OnContent: {},
  OnType: null,
  OnColor: "#000",
  OnKey : "title"
};

export default ContentList;

