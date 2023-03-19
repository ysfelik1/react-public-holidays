import React from "react";
import MenuLinks from "./menuLinks";
const Header = ({ className }) => {
  return (
    <React.Fragment>
      <div className={className}>
        <h1>Public Holidays World Wide</h1>
      </div>
      <MenuLinks className={"menu"} />
    </React.Fragment>
  );
};
export default Header;
