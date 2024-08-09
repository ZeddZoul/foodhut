import Navbar from "../components/navbar";
import s from "./style.module.scss";
import Form from "../components/form";
import image from "../../public/contact.png";
import Image from "next/image";
import Footer from "../components/footer";
const ContactUs = () => {
  
  return (
    <>
      <div className={s.Container}>
        <Navbar />
        <center>
          <h1 className={s.Monoton}>Contact us</h1>
        </center>
        <div className={s.FormWrapper}>
          <Image src={image} alt="" />
          <Form formType={"contact"} />
        </div>
        <div className={s.Newsletter}>
          <p>Join the FoodHut family and be the first to know about:</p>
          <ul>
            <li>🔥 Hot new restaurants in your area</li>
            <li>🤑 Exclusive discounts and promotions</li>
            <li>🎉 Special events and giveaways</li>
          </ul>
          <h3>Subscribe to our newsletter today!</h3>
          <input
            type={"email"}
            id={"Email"}
            label={"Email"}
            name={"Email"}
            placeholder={"Enter your Email"}
          />
          <button>Subscribe</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
