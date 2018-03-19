import React, { Component } from "react";

const Lists = [
  {
    title: "회사소개",
    contents: ["인사말", "연혁", "조직도", "오시는 길"]
  },
  {
    title: "사업영역",
    contents: ["의료정보사업", "VOIP 사업", "주요 고객사"]
  },
  {
    title: "제품소개",
    contents: ["EMR", "iEMR", "OCS", "mPOC", "mEAMS", "ERP", "CRM"]
  },
  {
    title: "고객센터",
    contents: ["고객지원", "원격지원"]
  }
];

function checkLink(index) {
  switch (index) {
    case 0:
      return "/introduce";
    case 1:
      return "/business";
    case 2:
      return "/product";
    case 3:
      return "/customer";
    default:
      break;
  }
}

class Sitemap extends Component {
  constructor(props) {
    super(props);
    this.init = this.init.bind(this);
    this.load = this.load.bind(this);
  }

  init() {
    return (
      <div style={{ width: "100%", padding: "20px" }}>
        <div className="ui label">&#9830;&nbsp;&nbsp;&nbsp; 사이트 맵</div>
      </div>
    );
  }

  load(objects, index) {
    return (
      <div
        style={{
          width: "15%",
          float: "left",
          height: "200px",
          margin: "10px",
          minWidth: "300px"
        }}
      >
        <div className="ui list">
          <div className="item">
            <a
              style={{ color: "white", fontSize: "20px", fontWeight: "500" }}
              href={checkLink(index)}
            >
              {objects.title}
            </a>
            <div className="list">
              {objects.contents.map((obj, i) => {
                return (
                  <div
                    className="item"
                    key={i}
                    value=" "
                    style={{ position: "inherit" }}
                  >
                    <a
                      className="item"
                      style={{ color: "#dfdfdf", position: "inherit" }}
                      href={checkLink(index) + "/#" + obj}
                    >
                      {obj}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          padding: "50px",
          background: "#888",
          overflow: "hidden"
        }}
      >
        {this.init()}
        {Lists.map((list, i) => {
          return <div key={i}>{this.load(list, i)}</div>;
        })}
      </div>
    );
  }
}

export default Sitemap;
