import React from "react";
import "./navbar.css";
import { ReactComponent as LocationSVG } from "../../img/navbar/location.svg";
import { ReactComponent as UzbFlag } from "../../img/navbar/uzb-flag.svg";
import { ReactComponent as DarkModeSVG } from "../../img/navbar/dark-theme.svg";
import { ReactComponent as UzumMarketSVG } from "../../img/navbar/UzumMarket.svg";

function Navbar() {
  return (
    <div>
      {/* Container */}
      <div className="Container">
        {/* TopBackground */}
        <div className="topBG">
          <LocationSVG className="img-top" /> {/* SVG Component Run */}
          <p>
            Shahar:{" "}
            <a href="#" className="topBG__LocationLink">
              Toshkent
            </a>
          </p>
          <a href=""> Topshirish punktlari </a>
          <p className="go-day">
            {" "}
            Buyurtmangizni 1 kunda bepul yetkazib beramiz!{" "}
          </p>
          <div className="for-user">
            <a href="#" className="sell-uzum">
              {" "}
              Uzumda soting{" "}
            </a>
            <a href=""> Savol-javoblar </a>
            <span> Buyurtmalarim </span>
          </div>
          {/* Uzb Lang */}
          <div className="SelectLang">
            <UzbFlag className="uzb-flag" /> {/* SVG Component Run */}
            <select className="SelectLang">
              <option value="uz">O'zbekcha</option>
            </select>
          </div>
          {/* Dark Theme */}
          <div className="DarkTheme">
              <DarkModeSVG className="dark-mode" /> {/* SVG Component Run */}
              <span>Mavzu</span>
          </div>
        </div>
      </div>
      {/* // ================= Navbar ================= */}
      <nav>
          <div className="Navbar">
            {/* FIXME: Uzum Market */}
              <div>
                  <div className="nav-1">
                    <a href="../../public/index.html">
                      <UzumMarketSVG className="uzum-market" /> {/* SVG Component Run */}
                    </a>
                  </div>
                  <div className="Katalog">

                  </div>
              </div>
              {/* FIXME: tab text's */}
              <div></div>
          </div>
      </nav>
    </div>

    
    
  );
}

export default Navbar;
