"use client";
import { useState } from "react";
import s from "./style.module.scss";
const Textfield = ({ fieldtype, id, name, placeholder }) => {
  const [focus, setFocus] = useState(false);
  return (
    <div className={s.Wrapper}>
      <label
        htmlFor={id}
        className={focus ? `${s.Label} ${s.Focused}` : `${s.Label}`}
      >
        {name}
      </label>
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        type={fieldtype}
        id={id}
        placeholder={!focus ? "" : placeholder}
        name={name}
        className={s.Textfield}
      />
    </div>
  );
};

export default Textfield;
