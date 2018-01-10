import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Home from "../Home";
import Introduce from "../ContentPage/Introduce";
import Business from "../ContentPage/Business";
import Product from "../ContentPage/Product";
import Customer from "../ContentPage/Customer";


class Header extends Component {
    render() {
        return (
        <header>
            <nav>
              <ul>
                <li>
                  <Link to="/introduce">회사소개</Link>
                </li>
                <li>
                  <Link to="/business">사업영역</Link>
                </li>
                <li>
                  <Link to="/product">제품소개</Link>
                </li>
                <li>
                  <Link to="/customer">고객센터</Link>
                </li>
              </ul>
            </nav>
            <Route exact path="/" component={Home} />
            <Route path="/introduce" component={Introduce} />
            <Route path="/business" component={Business} />
            <Route path="/product" component={Product} />
            <Route path="/customer" component={Customer} />
        </header>
        );
    }
}

export default Header;