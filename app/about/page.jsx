import Image from "next/image";
import s from "./style.module.scss";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import image from "../../public/c.svg";
import image1 from "../../public/a.svg";
import image2 from "../../public/b.svg";
import image3 from "../../public/d.svg";
const About = () => {
  return (
    <>
      <div className={s.Container}>
        <Navbar />
        <h1 className={s.Monoton}>How we started</h1>
        <div className={s.Page1}>
          <Image src={image} alt="" />
          <div>
            <p>
              Food Hut,originally founded by Group 6 Food and Beverages co, a
              joint colllaborative effort of a group of 10 passionate food
              enthusiasts in their quest to bring Food Hut to live. Driven by a
              shared love for culinary arts and a vision to revolutionize the
              online food ordering experience, they poured their hearts and
              souls into creating a platform that would tantalize taste buds and
              redefine convenience.
            </p>
            <p>
              A new online brand riddled with bringing the best variety of
              flavor to our consumers so that they can never be caught lacking
              in taste. Our varierty of food and beverages are mouth watering
              including an exclusive blend of both native and international
              dishes with luxurious sparkling drinks to wash them down. We
              source the freshest ingredients, handpick the finest spices, and
              employ a team of culinary artisans who pour their passion into
              every dish they create.
            </p>
            <p>
              At Food Hut, we're not just about delivering meals; we're about
              delivering experiences. We believe that food has the power to
              connect people, spark joy, and create lasting memories. That's why
              we go above and beyond to ensure that every aspect of your Food
              Hut experience is exceptional, from the moment you browse our menu
              to the last bite of your delicious meal.
            </p>
          </div>
        </div>
        <h1 className={s.Monoton}>Why us</h1>
        <div className={s.Page2}>
          <div className={s.card}>
            <Image src={image1} alt="" />
            <p>skilled and professional chefs with our 18/5 availability</p>
          </div>
          <div className={s.card}>
            <Image src={image2} alt="" />
            <p>Hand curated recipies that do not break the bank</p>
          </div>
          <div className={s.card}>
            <Image src={image3} alt="" />
            <p>
              {" "}
              Effectiveness in our dishes and beverages as we do not believe in
              rush work
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
