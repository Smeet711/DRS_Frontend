import React from "react";
import { Link, NavLink } from "react-router-dom";
import ButtonFill from "../ButtonFill";
import Toggler from "../Toggler";



const NavLinks = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "How it Works",
      link: "/how",
    },
    {
      name: "Let's Start Ride",
      link: "/start",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      {links.map((link, i) => {
        return (
          <ul key={i}>
            <li key={i} className="font-semibold hover:text-primary">
              <Link to={link.link}>{link.name}</Link>
            </li>
          </ul>
        );
      })}
{/* <Toggler/> */}
    </>
  );
};

export default NavLinks;
