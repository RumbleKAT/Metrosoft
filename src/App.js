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
import FaCaretSquareOUp from  "react-icons/lib/fa/caret-square-o-up";
import Sticky from "react-sticky-el";

class App extends Component {
 
  render() {
    return <div className={styles}>
        <Sticky>
          <Header />
        </Sticky>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/introduce" component={Introduce} />
              <Route path="/business" component={Business} />
              <Route path="/product" component={Product} />
              <Route path="/customer" component={Customer} />
            </Switch>
            <ScrollToTop showUnder={200} style={{ bottom: "80px" }}>
              <div style={{ color: "#169b9b" }}>
                <FaCaretSquareOUp size={40} />
              </div>
            </ScrollToTop>
          </div>
        </BrowserRouter>
        <Footer />
      </div>;
  }
}

export default App;
