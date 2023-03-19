import { Link } from "react-router-dom";
const menuItems = require("../data/menu.json");
const MenuLinks = ({ className }) => {
  return (
    <div>
      {menuItems.map((item) => (
        <Link key={item.id} to={`/${item.name}`} className={className}>
          {item.name.replace("-", " ")}
        </Link>
      ))}
    </div>
  );
};
export default MenuLinks;
