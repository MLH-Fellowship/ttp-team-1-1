import React from "react";
import NavBar from "./MyPortfolio/Navbar";
import Home from "./MyPortfolio/Home";
import About from "./MyPortfolio/About";
import Projects from "./MyPortfolio/Projects";
import Contact from "./MyPortfolio/Contact";
import info from "./MyPortfolio/ChangeYourInfoHere";

const MyPortfolioView = () => {
  return (
    <div>
      <Home name={info.yourName} description={info.yourDescription} />
    </div>
  );
};

export default MyPortfolioView;