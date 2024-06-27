// import { GoThreeBars, GoChevronUp } from "react-icons/go";
import {BiAlignRight, BiArrowFromBottom   } from "react-icons/bi";
import { useState } from "react";
import "./css/Navbar.css";



const Navbar = () => {
  const [Menu, setMenu] = useState(false);

  const ClickitemNav = (item) => {
    //localizamos el elemento (seccion)
    const element = document.getElementById(item);
    //si existe
    if (element) {
      //hacemos scroll
      element.scrollIntoView({ behavior: "smooth" });
      setMenu(false);
    }
  };

  const ClickMenuBurger = () => {
    setMenu(!Menu);
  };

  return (
    <div className="Nav">
      
      <p className="title">MyProtfolio</p>
    
      <ul className={!Menu ?"Nav__List":"ListEnable"}>
        <li onClick={() => ClickitemNav("About")}>About me</li>
        <li onClick={() => ClickitemNav("knowledge")}>Skills</li>
        <li onClick={() => ClickitemNav("Experience")}>Experience</li>
        <li onClick={() => ClickitemNav("ContactMe")}>Contact me</li>
      </ul>
      
      {Menu ? <BiArrowFromBottom  onClick={ClickMenuBurger} className="BurgerIcon" /> : <BiAlignRight  onClick={ClickMenuBurger} className="BurgerIcon" />}
      
    </div>
  );
};

export default Navbar;
