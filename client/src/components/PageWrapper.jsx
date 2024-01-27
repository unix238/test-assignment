import React from "react";
import { Navbar } from "./UI/Navbar/Navbar";
import { Footer } from "./UI/Footer/Footer";

export const PageWrapper = (props) => {
  return (
    <div className='app'>
      <div className='top'>
        <Navbar />
        <div className='main'>{props.Component}</div>;
      </div>
      <Footer />
    </div>
  );
};
