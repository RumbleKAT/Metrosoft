import React, { Component } from 'react';
import styles from "./footer.scss";
import logo from "../../Image/metrologo.png";

class Footer extends Component {
    render() {
        console.log(styles);
        return <div className={styles.footer}>
            <div className={styles.container}>
              <div className={styles.boxes}>
                <div className={styles.box}>
                  <img className={styles.boxImg} src={logo} alt="logo" />
                </div>
                <div className={styles.box}>
                  <p className={styles.normal}>
                    COPYRIGHT &copy; METROSOFT 070 ALLRIGHTS RESERVED
                    <br />
                    <br />
                    <span className={styles.highlight}>
                      상&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;호
                    </span> : 메트로소프트(주) 사업자번호 : 105-86-28613 별정통신사업자 등록 : 제 111068 호
                    <br />
                    <span className={styles.highlight}>
                      본사주소
                    </span> : 경기도 안양시 동안구 호계동 1027 안양IT밸리 606~7호 TEL : 031-465-9971~3, FAX : 031-465-9974
                  </p>
                </div>
              </div>
            </div>
          </div>;
    }
}

export default Footer;