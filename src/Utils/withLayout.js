import React from "react";
import Footer from "Components/Footer";
import Header from "Components/Header";

const withLayout = (Component) => {
  return (props) => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <Component {...props} />
        </div>
        <Footer />
      </div>
    );
  };
};

export default withLayout;
