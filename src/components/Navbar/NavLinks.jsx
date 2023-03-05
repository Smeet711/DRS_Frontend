import React from "react";
import { Link, NavLink } from "react-router-dom";

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
      name: "Become a Rider",
      link: "/rider",
    },
    {
      name: "Become a Driver",
      link: "/driver",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      {links.map((link, i) => (
        <ul key={i}>
          <li key={i} className="font-semibold hover:text-primary">
            <a href={link.link}>{link.name}</a>

            {/* <Link to={link.link}>{link.name}</Link> */}
          </li>
        </ul>
      ))}
    </>
  );
};

export default NavLinks;
