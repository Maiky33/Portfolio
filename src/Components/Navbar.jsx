import { GoThreeBars, GoChevronUp } from "react-icons/go";
import { useState } from "react";
import "./css/Navbar.css";



const Navbar = () => {
  const [Menu, setMenu] = useState(false);

  //Scroll
  const ClickAbout = () => {
    //localizamos el elemento (seccion)
    const element = document.getElementById("About");
    //si existe
    if (element) {
      //hacemos scroll
      element.scrollIntoView({ behavior: "smooth" });
      setMenu(false);
    }
  };

  const Clickknowledge = () => {
    const element = document.getElementById("knowledge");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenu(false);
    }
  };

  const ClickExperience = () => {
    const element = document.getElementById("Experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenu(false);
    }
  };

  const ClickContactMe = () => {
    const element = document.getElementById("ContactMe");
    if (element) {
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
        <li onClick={() => ClickAbout()}>About me</li>
        <li onClick={() => Clickknowledge()}>Skills</li>
        <li onClick={() => ClickExperience()}>Experience</li>
        <li onClick={() => ClickContactMe()}>Contact me</li>
      </ul>
      
      {Menu ? <GoChevronUp onClick={ClickMenuBurger} className="BurgerIcon" /> : <GoThreeBars onClick={ClickMenuBurger} className="BurgerIcon" />}
      
    </div>
  );
};

export default Navbar;
