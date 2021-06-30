import React from "react";
import Header from "./header";
import Main from "./main";
import "../styles/layout.css";
import * as styles from "./layoutProduit.module.css";
import Footer from "./footer";

const LayoutProduit = ({ children, show, nav, showNav, siteTitle }) => (
  <>
    <div className={styles.page}>
      <Header siteTitle={siteTitle} show={show} nav={nav} showNav={showNav} />
      <Main>{children}</Main>
    </div>
  </>
);

export default LayoutProduit;
