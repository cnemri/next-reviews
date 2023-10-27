import React from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

type Props = {
  page: number;
  pageCount: number;
  href: string;
};

const PaginationBar = ({ page, pageCount, href }: Props) => {
  return (
    <div className="flex gap-3 items-center">
      <PaginationLink href={`${href}?page=${page - 1}`} enabled={page > 1}>
        <ChevronLeftIcon className="h-5 w-5" />
      </PaginationLink>
      <span>
        Page {page} of {pageCount}
      </span>
      <PaginationLink
        href={`${href}?page=${page + 1}`}
        enabled={page < pageCount}
      >
        <ChevronRightIcon className="h-5 w-5" />
      </PaginationLink>
    </div>
  );
};

const PaginationLink = ({ href, enabled, children }) => {
  if (!enabled) {
    return (
      <span className="border rounded text-slate-200 text-sm bg-slate-100 cursor-not-allowed">
        {children}
      </span>
    );
  }
  return (
    <Link
      href={href}
      className="border rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700"
    >
      {children}
    </Link>
  );
};

export default PaginationBar;
