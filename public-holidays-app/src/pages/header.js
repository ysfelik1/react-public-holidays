import React from "react";
import MenuLinks from "../components/menuLinks";
const Header = ({ className }) => {
  return (
    <React.Fragment>
      <div className={className}>
        <h1>Public Holidays World Wide</h1>
      </div>
      <nav className="navbar navbar-dark bg-light justify-content-around">
        <ul className="nav nav-pills nav-fill">
          <MenuLinks className={"nav-link m-2"} />
        </ul>
      </nav>
    </React.Fragment>
  );
};
export default Header;
