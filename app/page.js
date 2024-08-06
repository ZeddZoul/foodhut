import Navbar from './components/navbar'
import Image from "next/image"
import s from "./page.module.scss"
import Link from 'next/link'
import hero from "../public/hero.svg"
import Footer from './components/footer'
const Home = () => {
  return (
    <>
      <div className={s.Container}>
        <Navbar />
        <div className={s.Home}>
          <div className={s.Hero_Text}>
            <h1>
              Unleash your inner foodie at
            </h1>
            <span className={s.Monoton}>FOODHUT</span>
            <p>

              Indulge in the ultimate food experience at Foodhut where hunger meets happiness. Bite through a tantalizing menu of burgers, refreshing drinks, and more. Come satisfy your cravings and leave with a smile. Order now for quick and easy delivery!</p>
            <Link href="/login">Order a meal &rarr;</Link>
          </div>
          <Image src={hero} />

        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Home