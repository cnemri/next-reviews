"use client";

import React from "react";
import { LinkIcon } from "@heroicons/react/20/solid";

type Props = {};

const ShareLinkButton = (props: Props) => {
  const [clicked, setClicked] = React.useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };
  return (
    <button
      className="border px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700 flex gap-1 items-center"
      onClick={handleClick}
    >
      <LinkIcon className="h-4 w-4" />
      {clicked ? "Link Copied!" : "Share Link"}
    </button>
  );
};

export default ShareLinkButton;
