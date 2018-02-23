import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styles from "./header.scss";
import logo from "../../Image/metrologo.png";


class Header extends Component {
    render() {
        return <div>
            <div className={styles.header}>
            <div className={styles.container}>
              <div className={styles.branding}>
                <a href= "/">
                <img className={styles.boxImg} src={logo} alt="logo" />
                </a>
              </div>
              <nav>
                <ul className={styles.ul}>
                  <li className={styles.highlight}>
                    <a className={styles.context} href="/introduce">
                      회사소개
                    </a>
                  </li>
                  <li className={styles.highlight}>
                    <a className={styles.context} href="/business">
                      사업영역
                    </a>
                  </li>
                  <li className={styles.highlight}>
                    <a className={styles.context} href="/product">
                      제품소개
                    </a>
                  </li>
                  <li className={styles.highlight}>
                    <a className={styles.context} href="/customer">
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