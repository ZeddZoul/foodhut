import s from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import Form from "../components/form";
import image from "../../public/login_banner.svg";
const Login = () => {
  return (
    <div className={s.Container}>
      <Link href={"/"}>
        <Image alt="Logo" width={140} height={70} src={"/logo.png"} />
      </Link>
      <h1 className={s.Monoton}>Login to your account</h1>
      <div className={s.Page}>
        <div className={s.FormWrapper}>
          <Form formType={"login"} />
          <p>
            {" "}
            <Link href="/">Forgot Password </Link> <br />{" "}
            <Link href="/signup"> I dont have an account yet</Link>
          </p>
        </div>
        <Image src={image} alt="enjoying chips" />
      </div>
    </div>
  );
};

export default Login;
