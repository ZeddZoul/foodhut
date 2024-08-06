"use client";
import s from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import Form from "../components/form";
import image from "../../public/login_banner.svg";
const SignUp = () => {
  return (
    <div className={s.Container}>
      <Link href={"/"}>
        <Image alt="Logo" width={140} height={70} src={"/logo.png"} />
      </Link>
        <h1 className={s.Monoton}>Sign up to foodhut</h1>
      <div className={s.Page}>
        <div className={s.FormWrapper}>
          <Form formType={"signup"} />
          <p>
            <Link href="/login">I already have an account</Link>
          </p>
        </div>
        <Image src={image} alt="enjoying chips" />
      </div>
    </div>
  );
};

export default SignUp;
