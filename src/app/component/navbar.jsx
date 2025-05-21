import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-yellow-500 p-10 h-20 w-full px-15 text-white flex justify-between items-center">
    
        <Link href={"/"} className=" text-xl hover:text-pink-600">
          Accueil
        </Link>
    
    </nav>
  );
}
