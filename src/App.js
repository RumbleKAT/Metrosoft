import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
    <div>
          <BrowserRouter>
              <Header />
          </BrowserRouter>
          
          <Footer />
    </div>);
  }
}

export default App;
