import React, { Component } from 'react';
import ceo from "../../../Image/ceo.jpeg";
import sign from "../../../Image/sign.png";
import styles from "./styles.scss";
import PointDiv from "../pointDiv";

class CEOIntroduce extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
        object: this.props.object
    };

    this._loadArray = this._loadArray.bind(this);
  }

  _loadArray = (obj) => {

    var total = "";

      for (const content in obj) {

        if (obj.hasOwnProperty(content)) {
          const element = obj[content];
          total += element;
          total += "\n";
        }
      }
    return (
      <div style={{marginTop : "60px"}}>
        {
          total.split('\n').map(function(line,i){
            if(line !== ""){
              return(<p key={i}>{line}<br /></p>);
            }else{
              return null;
            }
        })
        }
      </div>
    );
  }

  render() {
    
  return <div>
      <div style={{padding:"50px"}}>
        <PointDiv onTitle={this.state.object["title"]} />
      </div>
      <div className={styles.boxes}>
        <div className={styles.container}>
          <div className={styles.box}>
            <img className={styles.boxImg} src={ceo} alt="ceo_picture" />
          </div>
          <div className={styles.box}>
            <h2>
              <span className={styles.span}>
                {this.state.object["subtitle"]}
              </span>
            </h2>
            {this._loadArray(this.state.object["content"])}
            <div className={styles.signdiv}>
              {this.state.object["finish"]}
              <img className={styles.sign} src={sign} alt="ceo_picture" />
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}


export default CEOIntroduce;