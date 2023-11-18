import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center bg-slate-600
    px-8 py3
    "
    >
      <Link href={"/"} className="text-white font-bold">
        CRUD
      </Link>
      <Link
        href={"/addTopic"}
        className="bg-green-500 text-white p-2 my-3"
      >
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
