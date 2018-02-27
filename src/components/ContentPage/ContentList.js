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
    }

    loadSub(objects){
        return (
            objects.map((object, i)=> {
                return <div key={i}>
                    <li style={{ fontSize: "13px", marginBottom: "5px" ,listStyleType:"circle" }}>
                      {object.title}
                    </li><br/>
                  </div>;
            })
        )
    }

    loadList(objects){
        return <div>
            <li style={{ fontSize: "16px", marginBottom: "5px",listStyleType:"initial" }}>
                {objects.title}
            </li>
            <br />
            <ol style={{ color: "#000" }}>
              {Object.keys(objects).indexOf("contents") !== -1
                ? this.loadSub(objects.contents)
                : null}
            </ol>
            {Object.keys(objects).indexOf("image") !== -1 ? this.loadImg(objects.image) : null}
          </div>;
        }

    loadData(objects){

        if(this.state.types === "number"){

                return <div style={{ padding: "10px", marginTop: "20px" }}>
                    <ol >
                      {
                       objects.map((obj, i) => {
                           var check = CheckChild(obj,this.state.key);
                           if (check){
                               //involve subtitles
                               return <div key={i}>{ this.loadList(obj) }</div>;
                           }else{
                                return (
                                    <div style={{ padding: "10px", marginTop: "20px" }}>
                                        <ol style={{ li: { color: this.state.color }}}>
                                        {
                                        objects.map((obj, i) => {
                                                return <li key={i}>{obj}</li>;
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
                    <ul >{
                        objects.map((obj,i) => {
                            return <li style={{display:"listItem" , padding:'10px 20px 20px 0',fontSize:"16px"}} key={i}>{obj}</li>;
                        })}
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

