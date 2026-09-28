import React from "react";
import { NavLink } from "react-router";
import logo from "/src/assets/logo.png";
import Container from "../Container";
import PBase from "../PBase";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import Psm from "../Psm";

const Footer = () => {
  return (
    <>
      <footer className="pt-10 lg:pt-17">
        <Container>
          <div className="">
            {/* Logo */}
            <NavLink to={"/"} className="w-15 h-12.5 block mx-auto flex">
              <img
                src={logo}
                alt="Global Alliance"
                className="w-full h-full"
                loading="lazy"
                decoding="async"
              />
              <h4 className="font-bold text-2xl leading-5 pt-1 text-primary"><span className="text-secondary">Global</span> Alliance</h4>
            </NavLink>
            {/* Logo */}

            {/* menu list  */}
            <ul className="flex flex-col md:flex-row items-center space-y-1 md:space-x-8 justify-center my-4 lg:my-10">
              <li>
                <NavLink to="/">
                  <PBase
                    text={"Home"}
                    className={
                      "font-semibold text-secondary hover:text-primary transition duration-300"
                    }
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="about-us">
                  <PBase
                    text={"About Us"}
                    className={
                      "font-semibold text-secondary hover:text-primary transition duration-300"
                    }
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="university">
                  <PBase
                    text={"Universities"}
                    className={
                      "font-semibold text-secondary hover:text-primary transition duration-300"
                    }
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="our-services">
                  <PBase
                    text={"Our Services"}
                    className={
                      "font-semibold text-secondary hover:text-primary transition duration-300"
                    }
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="blogs">
                  <PBase
                    text={"Blog"}
                    className={
                      "font-semibold text-secondary hover:text-primary transition duration-300"
                    }
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="contact">
                  <PBase
                    text={"Contact"}
                    className={
                      "font-semibold text-secondary hover:text-primary transition duration-300"
                    }
                  />
                </NavLink>
              </li>
            </ul>
            {/* menu list  */}

            {/* =========icon list========== */}
            <div className="flex items-center justify-center gap-x-3 pt-2 pb-8 lg:pb-15">
              <NavLink
                to={"https://www.facebook.com/profile.php?id=61588417710246"}
                target="_blank"
              >
                <div className="group hover:bg-gray-300 hover:-translate-y-1 transition duration-300 py-3 px-3 bg-secondary rounded-full ">
                  <FaFacebookF className="text-white group-hover:text-primary transition duration-300" />
                </div>
              </NavLink>
              <NavLink to={"/"} target="_blank">
                <div className="group hover:bg-gray-300 hover:-translate-y-1 transition duration-300 py-3 px-3 bg-secondary rounded-full ">
                  <IoLogoYoutube className="text-white group-hover:text-primary transition duration-300" />
                </div>
              </NavLink>
              <NavLink to={"/"} target="_blank">
                <div className="group hover:bg-gray-300 hover:-translate-y-1 transition duration-300 py-3 px-3 bg-secondary rounded-full ">
                  <FaInstagram className="text-white group-hover:text-primary transition duration-300" />
                </div>
              </NavLink>
              <NavLink to={"/"} target="_blank">
                <div className="group hover:bg-gray-300 hover:-translate-y-1 transition duration-300 py-3 px-3 bg-secondary rounded-full ">
                  <FaLinkedin className="text-white group-hover:text-primary transition duration-300" />
                </div>
              </NavLink>
            </div>
            {/* =========icon list========== */}
          </div>
        </Container>
        <div className="py-3 bg-secondary w-full text-center">
          <Psm
            text={
              " ©2026 All Rights Reserved By Global Alliance"
            }
            className={"text-white"}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
