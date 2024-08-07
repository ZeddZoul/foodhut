import Link from "next/link"
import s from "./style.module.scss"
import Image from "next/image"
const Navbar = () => {
  return (
    <div className={s.Navbar} >
    <Link href={"/"}>  <Image alt="Logo" width={140} height={70} src={"/logo.png"}  /></Link>
      
      <ul className={s.Navlinks}>
        <Link href="/">Home</Link>
        <Link href="/about">About us</Link>
        <Link href="/contact">Contact us</Link>
        <Link href="/order">Order a meal</Link>
      </ul>
    </div>
  )
}

export default Navbar