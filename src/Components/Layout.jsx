import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "../pages/Home";

function Layout() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div>
      <Header isNavOpen={isNavOpen} handleNavOpen={handleNavOpen} />
      <Sidebar isNavOpen={isNavOpen} />
      <Home isNavOpen={isNavOpen} />
    </div>
  );
}

export default Layout;
