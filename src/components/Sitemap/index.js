import React, { Component } from 'react';

const Lists = [
    {
      title : '회사소개',
      contents : ['인사말','연혁','조직도','오시는 길']
    },
    {
      title : '사업영역',
      contents : ['의료정보사업','VOIP 사업','주요 고객사']
    },
    {
      title : '제품소개',
      contents : ['EMR','iEMR','OCS','mPOC','mEAMS','ERP','CRM']
    },
    {
      title : '고객센터',
      contents : ['고객지원','원격지원']
    }
];

function checkLink(index){
    switch (index) {
        case 0:
            return "/introduce"
            break;
        case 1:
            return "/business"
            break;
        case 2:
            return "/product"
            break;
        case 3:
            return "/customer"
            break;
        default:
            break;
    }
}

class Sitemap extends Component {

    constructor(props){
        super(props);
        this.init = this.init.bind(this);
        this.load = this.load.bind(this);
    }

    init() {
    return <div style={{width:"100%",padding:"20px"}}>
        <div className="ui label">
          <i className="chevron right icon" />
          사이트 맵
        </div>
      </div>;
  }

    load(objects,index){
        return <div style={{ width: "20%", float: "left", height: "200px", margin: "10px", minWidth: "300px" }}>
            <ol className="ui list">
              <li value=" ">
                <a style={{ color: "white", fontSize: "20px", fontWeight: "500" }} href={checkLink(index)}>
                  {objects.title}
                </a>
                <ol>
                  {objects.contents.map((obj, i) => {
                    return <li key={i} value=" " style={{ position: "inherit" }}>
                        <a style={{ color: "#fff", position: "inherit" }} href={checkLink(index) + "/#" + obj}>
                          {obj}
                        </a>
                      </li>;
                  })}
                </ol>
              </li>
            </ol>
          </div>;
    }




  render() {
    return <div style={{ width: "100%", padding: "50px", background: "#888", overflow: "hidden" }}>
        {this.init()}
        {Lists.map((list,i) => {
            return(
                <div key={i}>
                    {this.load(list,i)}
                </div>
            )
        })}
      </div>;
  }
}

export default Sitemap;