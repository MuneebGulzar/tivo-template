import React from "react";
import "../styles/footer.scss";

import {
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramLine,
  RiGithubLine,
} from "react-icons/ri";
const Footer = () => {
  return (
    <footer>
      <div className="about">
        <h3>about website</h3>
        <p>
          Aliquam ultrices turpis a auctor commodo. Etiam consectetur tincidunt
          elit ac euismod. Duis et finibus felis, non porttitor rapena live
          dolor
        </p>
      </div>
      <div className="links">
        <span>
          <RiFacebookFill />
        </span>
        <span>
          <RiTwitterFill />
        </span>
        <span>
          <RiInstagramLine />
        </span>
        <span>
          <RiGithubLine />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
