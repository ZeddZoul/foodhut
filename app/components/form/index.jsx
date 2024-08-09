import s from "./style.module.scss";
import Textfield from "./Textfield";
const Form = ({ formType }) => {
  const SignupForm = (
    <form className={s.SignupForm}>
      <Textfield
        fieldtype={"text"}
        id={"name"}
        label={"Name"}
        name={"name"}
        placeholder={"Enter your full name"}
      />
      <Textfield
        fieldtype={"email"}
        id={"email"}
        label={"Email"}
        name={"email"}
        placeholder={"Enter your Email"}
      />
      <Textfield
        fieldtype={"password"}
        id={"password"}
        label={"Password"}
        name={"password"}
        placeholder={"Enter your Password"}
      />
      <Textfield
        fieldtype={"password"}
        id={"cpassword"}
        label={"Confirm password"}
        name={"Confirm password"}
        placeholder={"Re-enter password"}
      />
      <button>Create account</button>
    </form>
  );

  const LoginForm = (
    <form className={s.LoginForm}>
      <Textfield
        fieldtype={"email"}
        id={"email"}
        label={"Email"}
        name={"email"}
        placeholder={"Enter your Email"}
      />
      <Textfield
        fieldtype={"password"}
        id={"password"}
        label={"Password"}
        name={"password"}
        placeholder={"Enter your Password"}
      />
      <button>Login</button>
    </form>
  );

  const ContactForm = (
    <form className={s.ContactForm}>
      <Textfield
        fieldtype={"text"}
        id={"name"}
        label={"Name"}
        name={"Name"}
        placeholder={"Enter your Name"}
      />
      <Textfield
        fieldtype={"email"}
        id={"email"}
        label={"Email"}
        name={"email"}
        placeholder={"Enter your Email"}
      />
      <textarea
        rows={7}  placeholder="Leave a message"></textarea>
      <button>Submit</button>
    </form>
  );

  const forms = {
    signup: SignupForm,
    login: LoginForm,
    contact: ContactForm,
  };
  return forms[formType];
};

export default Form;
