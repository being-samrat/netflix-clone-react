import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        alt="Netfilx Logo"
        src={`${process.env.PUBLIC_URL}/netflix lgo.png`}
      />
      <img
        className="nav_avatar"
        alt="Netfilx Avatar"
        src={`${process.env.PUBLIC_URL}/netflix_avatar.png`}
      />
    </div>
  );
}

export default Nav;
