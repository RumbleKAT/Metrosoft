import React, { Component } from 'react';
import DBLoad from "../DBLoad";
import ceo from "../../../Image/ceo.png";
import sign from "../../../Image/sign.png";
import styles from "./styles.scss";

class CEOIntroduce extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
        index: this.props.index
    };
  }

  render() {
  return <div>
      <div className={styles.boxes}>
        <div className={styles.container}>
          <div className={styles.box}>
            <img className={styles.boxImg} src={ceo} alt="ceo_picture" />
          </div>
          <div className={styles.box}>
            <h1>
              <DBLoad index={this.state.index} result={"title"} />
            </h1>
            <h2>
              <span className={styles.span}>
                <DBLoad index={this.state.index} result={"subtitle"} />
              </span>
            </h2>
            <p>
              <DBLoad index={this.state.index} result={"content"} keyIndex={0} />
              <br />
              <DBLoad index={this.state.index} result={"content"} keyIndex={1} />
              <br />
              <DBLoad index={this.state.index} result={"content"} keyIndex={2} />
              <br />
              <DBLoad index={this.state.index} result={"content"} keyIndex={3} />
              <br />
            </p>
            <div className={styles.signdiv}>
              <DBLoad index={this.state.index} result={"finish"} />
              <img className={styles.sign} src={sign} alt="ceo_picture" />
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}


export default CEOIntroduce;