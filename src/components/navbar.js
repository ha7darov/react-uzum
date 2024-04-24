import React from "react";
import "./navbar.css";
import LocationSVG from '../../img/navbar/location.svg';

function Navbar() {
  return (
    <nav>
      {/* Container */}
      <div className="Container">
        <div className="topBG">
          <img className="img-top" src={LocationSVG} alt="Location Icon" />
          <p>
            Shahar: <a href="#" className="topBG__LocationLink">Toshkent</a>
          </p>
          <a href=""> Topshirish punktlari </a>
          <p className="go-day"> Buyurtmangizni 1 kunda bepul yetkazib beramiz! </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
