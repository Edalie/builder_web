import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-yellow-500 shadow-md h-20 w-full px-10 text-white flex justify-between items-center">
    
        <Link href={"/"} className=" hover:text-pink-600">
          Accueil
        </Link>
    
    </nav>
  );
}
