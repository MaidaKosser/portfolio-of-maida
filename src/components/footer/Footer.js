import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);

  const currentYear = new Date().getFullYear();

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        Made with ❤️ by Maida Kosser(MK) © {currentYear} All rights reserved.
        </p>
      </div>
    </Fade>
  );
}

