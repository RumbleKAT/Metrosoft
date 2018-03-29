import React, { Component } from 'react';
import CustomerTable from "./CustomerTable";
import PointDiv from "../pointDiv";
import Remote from "./RemoteControl";
import TitleList from "../TitleList";
import url from "../../server.json";
import Axios from 'axios';

const Lists = ['고객지원','원격지원'];

const dir = "04";

class Customer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      object: false,
      url : url.url,
      dir : dir,
      load: "customer"
    };

    this.upDated = this.upDated.bind(this);
  }

  upDated(response) {
    this.setState({ object: response });
  }

  componentDidMount() {
    Axios.get('/Customer/index.json')
      .then(res => {
        const answer = res.data;
        this.upDated(answer);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if(!this.state.object){
      return "loading...";
    }
    else{
      return (
        <div style={{ marginTop: "30px" }}>
          <TitleList object={Lists} />
          <PointDiv onTitle={"고객지원"} />
          <CustomerTable onContent={this.state.object.address} />
          <PointDiv onTitle={"원격지원"} />
          <Remote />
        </div>
      );
    }
  }
}

export default Customer;