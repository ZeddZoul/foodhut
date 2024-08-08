import Navbar from './components/navbar'
import Image from "next/image"
import s from "./page.module.scss"
import Link from 'next/link'
import hero from "../public/hero.svg"
import Footer from './components/footer'
import { FaSearch } from 'react-icons/fa'
import MenuItem from './components/MenuItem'
import img1 from "../public/coffee.png"
import img2 from "../public/suya.png"
import img3 from "../public/tuna_ravioli.png"
import img4 from "../public/watermelon_juice.png"
import img5 from "../public/orange_juice.png"
import img6 from "../public/eggmeal.png"
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
          <Image src={hero} alt="" />

        </div>
        <div className={s.Page}>
          <h2 className={s.Monoton}>Place an order</h2>
          <p>Feel free to book a meal and a beverage from our awesome menu of sparkling drinks and savory dishes</p>
          <div tabIndex={1} className={s.Search}>
            <input type="text" placeholder='Search a meal' />
            <FaSearch />
          </div>
          <div className={s.Menu}>
            <MenuItem img={img1} name={"coffee"} price={"$46.00"} />
            <MenuItem img={img2} name={"Curry suya lamb chops"} price={"$149.00"} />
            <MenuItem img={img3} name={"Tuna ravioli"} price={"$159.00"} />
            <MenuItem img={img4} name={"Watermelon juice"} price={"$14.99"} />
            <MenuItem img={img5} name={"Egg meal"} price={"$29.99"} />
            <MenuItem img={img6} name={"Sparkling orange juice"} price={"$9.99"} />

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;