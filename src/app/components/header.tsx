"use client";

import Link from "next/link";

import { Nav } from "./nav";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 container m-auto">
      <Link href="/" className="text-2xl font-bold select-none cursor-pointer">
        DevLogs
      </Link>
      <Nav />
    </header>
  );
};
