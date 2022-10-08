import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const withLayout = (Component) => {
  return (props) => {
    return (
      <>
        <Header />
        <Component {...props} />
        <Footer />
      </>
    );
  };
};

export default withLayout;
