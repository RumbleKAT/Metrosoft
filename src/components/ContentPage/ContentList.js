import React, { Component } from 'react';

function CheckChild(objects) {
        var keys = Object.keys(objects);
        if (keys.includes("title")) {
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
            color : this.props.OnColor
        };
        this.loadData = this.loadData.bind(this);
        console.log(this.state.objects);

    }

    loadData(objects){

        if(this.state.types === "number"){

                return <div style={{ padding: "10px", marginTop: "20px" }}>
                    <ol className="ui list" >
                      {
                       objects.map((obj, i) => {
                           var check = objects.filter(CheckChild);
                           if (check){
                               //involve subtitles
                               return <div key={i}>
                                   <li className="item" style={{ fontSize: "18px", marginBottom: "5px" }}>
                                     {obj.title}
                                   </li>
                                   <br />
                                   <ol style={{ color: "#000" }}>
                                     {obj.content.map(
                                       (
                                         el,
                                         i
                                       ) => {
                                         return (
                                           <div
                                             key={
                                               i
                                             }
                                           >
                                             <li
                                               value="-"
                                               style={{
                                                 fontSize:
                                                   "13px",
                                                 marginBottom:
                                                   "5px"
                                               }}
                                             >
                                               {
                                                 el
                                               }
                                             </li>
                                             <br />
                                           </div>
                                         );
                                       }
                                     )}
                                   </ol>
                                 </div>;
                           }else{
                                return (
                                    <div style={{ padding: "10px", marginTop: "20px" }}>
                                        <ol className="ui list" style={{ li: { color: this.state.color } }}>
                                        {
                                        objects.map((obj, i) => {
                                                return <div key={i}>
                                                    <li>{obj}</li>
                                                    <br />
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
  OnColor : "#000"
};

export default ContentList;

