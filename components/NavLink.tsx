"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
  href: string;
  prefetch?: boolean;
};

const NavLink = ({ children, href, prefetch }: Props) => {
  const pathname = usePathname();
  if (href === pathname) {
    return (
      <span className="font-bold text-orange-800 font-orbitron">
        {children}
      </span>
    );
  }
  return (
    <Link
      href={href}
      className="font-bold text-orange-800 font-orbitron hover:underline"
      prefetch={prefetch}
    >
      {children}
    </Link>
  );
};

export default NavLink;
