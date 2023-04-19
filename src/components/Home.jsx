import React from "react";
import "../styles/home.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import HeaderImg from "../assets/header.svg";
import Description1 from "../assets/description-icon-1.svg";
import Description2 from "../assets/description-icon-2.svg";
import Description3 from "../assets/description-icon-3.svg";
import Fetaure1 from "../assets/feature-app-1.svg";
import Fetaure2 from "../assets/feature-app-2.svg";
import Fetaure3 from "../assets/feature-app-3.svg";
import Deatils from "../assets/details.svg";
import Video from "../assets/video-preview.svg";

import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <div className="text">
          <h1>SasS App Web HTML Template</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            enim eu velit commodo cursus. Sed lacinia sit
          </p>
          <div className="btns">
            <HashLink to="/#discover">
              <span className="discover">Discover</span>
            </HashLink>
            <Link to="/signup">
              <span className="signup">Sign up</span>
            </Link>
          </div>
        </div>
        <div>
          <img src={HeaderImg} alt="Image" />
        </div>
      </div>
      <div className="home2" id="discover">
        <div className="text">
          <p>Description</p>
          <h3>marketing automation will bring many more qualified leads</h3>
        </div>
        <div className="description">
          <div>
            <img src={Description1} alt="Description icon one" />
            <h3>List builder</h3>
            <p>
              Donec nec nulla mi. Duis hendrerit euismod interdum. Orci varius
              natoque penatibus et magnis dis parent
            </p>
          </div>
          <div>
            <img src={Description2} alt="Description icon two" />
            <h3>campaign tracker</h3>
            <p>
              Donec nec nulla mi. Duis hendrerit euismod interdum. Orci varius
              natoque penatibus et magnis dis parent
            </p>
          </div>
          <div>
            <img src={Description2} alt="Description icon three" />
            <h3>analytics tool</h3>
            <p>
              Donec nec nulla mi. Duis hendrerit euismod interdum. Orci varius
              natoque penatibus et magnis dis parent
            </p>
          </div>
        </div>
      </div>
      <div className="features" id="features">
        <div className="text">
          <p>Features</p>
          <h3>Marketing automation</h3>
          <p>
            Mauris molestie quam vel nunc maximus sodales. Sed rutrum, urna sit
            amet porttitor efficitur, velit mauris hendrerit eros, id rutrum
            lorem velit quis sapien raesent
          </p>
        </div>
      </div>
      <div className="details" id="details">
        <div className="text">
          <h3>Upgrade your marketing solution without delay</h3>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae. Nullam sed justo eget leo ullamcorper
          </p>
          <ul>
            <li>
              Integer mollis dapibus sem eu fringilla. Morbi viverra feugiat
            </li>
            <li>
              Praesent enim mi, rhoncus et euismod quis, varius et felliam
            </li>
            <li>Turpis eu facilisis pharetra, magna erat viverra ipsum, et</li>
          </ul>
          <span>Modal</span>
        </div>
        <div className="image">
          <img src={Deatils} alt="Details image" />
        </div>
      </div>
      <div className="video">
        <img src={Video} alt="Video preview image" />
        <p>
          Sed non urna vel nibh varius vehicula a vel turpis. Fusce eu orci leo.
          Curabitur sodales quam id lacus aliquet, nec maximus quam euismod.
          Fusce sed eros placerat
        </p>
      </div>
      <div className="pricing" id="pricing">
        <div className="text">
          <p>pricing</p>
          <h3>pricing options table</h3>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="title">
              <p>starter</p>
              <h2>free</h2>
              <span>14 days trial</span>
            </div>
            <ul>
              <li className="yes">Curabitur sodales quam id</li>
              <li className="no">Nam et magna iaculis ege</li>
              <li className="no">Email marketing module rop</li>
              <li className="no">Quam vel, semper libero da</li>
            </ul>
            <Link to='/signup'><span>Sign up</span></Link>
          </div>
          <div className="card">
            <div className="title">
              <p>advanced</p>
              <h2>$29.99</h2>
              <span>monthly</span>
            </div>
            <ul>
              <li className="yes">Curabitur sodales quam id</li>
              <li className="yes">Nam et magna iaculis ege</li>
              <li className="no">Email marketing module rop</li>
              <li className="no">Quam vel, semper libero da</li>
            </ul>
            <Link to='/signup'><span>Sign up</span></Link>
          </div>
          <div className="card">
            <div className="title">
              <p>complete</p>
              <h2>$39.99</h2>
              <span>monthly</span>
            </div>
            <ul>
              <li className="yes">Curabitur sodales quam id</li>
              <li className="yes">Nam et magna iaculis ege</li>
              <li className="yes">Email marketing module rop</li>
              <li className="yes">Quam vel, semper libero da</li>
            </ul>
            <Link to='/signup'><span>Sign up</span></Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
