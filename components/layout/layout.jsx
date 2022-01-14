import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import style from "./layout.module.css";

function Layout(props) {
  return (
    <div className={style.layout}>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
