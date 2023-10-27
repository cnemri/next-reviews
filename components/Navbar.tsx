import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <NavLink href="/"> Indie Gamer</NavLink>
        </li>
        <li className="ml-auto">
          <NavLink href="/reviews">Reviews</NavLink>
        </li>
        <li>
          <NavLink href="/about" prefetch={false}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
