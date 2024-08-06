import Link from "next/link";
import s from "./style.module.scss";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className={s.Footer}>
        <ul>
          <h1>Get in touch</h1>
          <h4>14 wegbo street onike yaba , Lagos</h4>
          <h4> foodhut@gmail.com</h4>
          <div className={s.Socials}>
            <Link href="/">
              <FaFacebook />
            </Link>

            <Link href="/">
              <AiFillInstagram />
            </Link>

            <Link href="/">
              <FaXTwitter />
            </Link>

            <Link href="/">
              <FaLinkedin />
            </Link>
          </div>
        </ul>
        <span></span>
        <ul>
          <h1>Opening hours </h1>
          <h4>Monday to Friday - 9am to 10pm</h4>
          <h4>Saturday and Sunday - 8am to 10pm</h4>
        </ul>
      </div>
      <center className={s.center}>copyright @2024 foodhut</center>
    </>
  );
};

export default Footer;
