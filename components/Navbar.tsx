import React from "react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link
            href="/"
            className="font-bold text-orange-800 font-orbitron hover:underline"
          >
            Indie Gamer
          </Link>
        </li>
        <li className="ml-auto">
          <Link
            href="/reviews"
            className="text-orange-800 font-orbitron hover:underline"
          >
            Reviews
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-orange-800 font-orbitron hover:underline"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
