import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const Links = [
  { label: "Dashboard", href: "/" },
  { label: "Issues", href: "/issues" },
];

const Navbar = () => {
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href={"/"}>
        <AiFillBug />
      </Link>
      <ul className='flex space-x-6'>
        {Links.map((link) => (
          <li key={link.href}>
            <Link
              className='text-zinc-500 hover:text-zinc-800 transition-colors'
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
