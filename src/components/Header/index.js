import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Home from "../Home";
import Introduce from "../ContentPage/Introduce";
import Business from "../ContentPage/Business";
import Product from "../ContentPage/Product";
import Customer from "../ContentPage/Customer";
import styles from "./header.scss";
import logo from "../../Image/metrologo.png";


class Header extends Component {
    render() {
        return <div>
            <div className={styles.header}>
            <div className={styles.container}>
              <div className={styles.branding}>
                <Link to = "/">
                <img className={styles.boxImg} src={logo} alt="logo" />
                </Link>
              </div>
              <nav>
                <ul className={styles.ul}>
                  <li className={styles.highlight}>
                    <Link className={styles.context} to="/introduce">
                      회사소개
                    </Link>
                  </li>
                  <li className={styles.highlight}>
                    <Link className={styles.context} to="/business">
                      사업영역
                    </Link>
                  </li>
                  <li className={styles.highlight}>
                    <Link className={styles.context} to="/product">
                      제품소개
                    </Link>
                  </li>
                  <li className={styles.highlight}>
                    <Link className={styles.context} to="/customer">
                      고객센터
                    </Link>
                  </li>
                </ul>
              </nav>
              </div>
            </div>
            <Route exact path="/" component={Home} />
            <Route path="/introduce" component={Introduce} />
            <Route path="/business" component={Business} />
            <Route path="/product" component={Product} />
            <Route path="/customer" component={Customer} />
          </div>;
    }
}

export default Header;