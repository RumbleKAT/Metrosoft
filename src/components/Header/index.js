import React, { Component } from 'react';
import styles from "./header.scss";
import logo from "../../Image/metrologo.png";


class Header extends Component {
  constructor(props){
    super(props);
    this.loadtitles = this.loadtitles.bind(this);
  }

  loadtitles(){
   // console.log("!!");
  }

    render() {
        return <div>
            <div className={styles.header}>
              <div className={styles.container}>
                <div className={styles.branding}>
                  <a href="/">
                    <img className={styles.boxImg} src={logo} alt="logo" />
                  </a>
                </div>
                <nav>
                  <ul className={styles.ul}>
                    <li className={styles.highlight}>
                      <a className={styles.context} href={`${process.env.PUBLIC_URL}/introduce`} onMouseOver={this.loadtitles}>
                        회사소개
                      </a>
                    </li>
                    <li className={styles.highlight}>
                      <a className={styles.context} href={`${process.env.PUBLIC_URL}/business`}>
                        사업영역
                      </a>
                    </li>
                    <li className={styles.highlight}>
                      <a className={styles.context} href={`${process.env.PUBLIC_URL}/product`}>
                        제품소개
                      </a>
                    </li>
                    <li className={styles.highlight}>
                      <a className={styles.context} href={`${process.env.PUBLIC_URL}/customer`}>
                        고객센터
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>;
    }
}

export default Header;