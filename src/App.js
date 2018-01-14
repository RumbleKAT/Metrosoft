import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./app.scss";

import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
    <div className={styles}>
          <BrowserRouter>
              <Header />
          </BrowserRouter>
          
          <Footer />
    </div>);
  }
}

export default App;
