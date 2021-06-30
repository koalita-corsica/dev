import React from "react";
import Header from "./header";
import Main from "../components/main";
import "../styles/layout.css";
import * as styles from "./layout.module.css";
import Footer from "../components/footer";
const Layout = ({ children, show, nav, showNav, siteTitle }) => (
  <>
    <div className={styles.page}>
      <Header siteTitle={siteTitle} show={show} nav={nav} showNav={showNav} />
      <Main>{children}</Main>
      <Footer />
    </div>
  </>
);

export default Layout;
