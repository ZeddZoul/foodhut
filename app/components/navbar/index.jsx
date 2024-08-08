"use client";
import Link from "next/link";
import s from "./style.module.scss";
import Image from "next/image";
import { FaHamburger } from "react-icons/fa";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div className={s.Navbar}>
      <Link href={"/"}>
        {" "}
        <Image alt="Logo" width={140} height={70} src={"/logo.png"} />
      </Link>
      <FaHamburger
        onClick={() => setMobile(true)}
        className={s.Hamburger}
      />
      <div className={    mobile ? `${s.menuContainer} ${s.visible}` : `${
            s.menuContainer
          }`}>
      <ul
        className={
          mobile ? `${s.Navlinks_mobile} ${s.visible}` : `${
            s.Navlinks_mobile
          }`
        }
      >
        <IoCloseOutline  onClick={() => setMobile(false)} />
        <Link href="/">Home</Link>
        <Link href="/about">About us</Link>
        <Link href="/contact">Contact us</Link>
        <Link href="/login">Order a meal</Link>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
