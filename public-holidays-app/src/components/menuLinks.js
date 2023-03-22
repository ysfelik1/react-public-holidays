import { Link } from "react-router-dom";
const menuItems = require("../data/menu.json");
const MenuLinks = ({ className }) => {
  return (
    menuItems.map((item) => (
      <li key={item.id} className="nav-item">
        <Link key={item.id} to={`/${item.name}`} className={className}>
          {item.name.replace(/-/g, " ")}
        </Link>
      </li>
    ))
  );
};
export default MenuLinks;
