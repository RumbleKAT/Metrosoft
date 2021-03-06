import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./app.scss";
import Home from "./components/Home";
import Introduce from "./components/ContentPage/Introduce";
import Business from "./components/ContentPage/Business";
import Product from "./components/ContentPage/Product";
import Customer from "./components/ContentPage/Customer";
import { Route, BrowserRouter,Switch } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import FaCaretUp from "react-icons/lib/fa/caret-up";
import Sticky from "react-sticky-el";
import Sitemap from "./components/Sitemap";
class App extends Component {
 
  render() {
    return <div className={styles}>
        <Sticky>
          <Header />
        </Sticky>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
              <Route path={`${process.env.PUBLIC_URL}/introduce`} component={Introduce} />
              <Route path={`${process.env.PUBLIC_URL}/business`} component={Business} />
              <Route path={`${process.env.PUBLIC_URL}/product`} component={Product} />
              <Route path={`${process.env.PUBLIC_URL}/customer`} component={Customer} />
            </Switch>
            <ScrollToTop showUnder={200} style={{ bottom: "80px" }}>
              <div style={{ color: "#169b9b" }}>
                <FaCaretUp size={40} />
              </div>
            </ScrollToTop>
          </div>
        </BrowserRouter>
        <Sitemap />
        <Footer />
      </div>;
  }
}

export default App;
