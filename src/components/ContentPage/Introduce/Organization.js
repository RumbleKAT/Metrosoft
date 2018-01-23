import React, { Component } from "react";
import style from  "./organization.scss";

class Organization extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: this.props.index
    };
  }

  render() {
    return <div>
        <div className={style.hvItem}>
          <div className={style.hvItemParent}>
            <p> This will be parent </p>
          </div>
          <div className={style.hvItemChildren}>
            <div className={style.hvItemChild}>
              <p> child Item </p>
            </div>
            <div className={style.hvItemChild}>
              <p> child Item </p>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default Organization;
