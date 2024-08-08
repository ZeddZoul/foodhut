import Image from "next/image";
import s from "./style.module.scss"
const MenuItem = ({ img, name, price }) => {
  return (
    <div className={s.MenuItem}>
      <Image src={img} alt="name" />
      <h4>{name}</h4>
      <small>{price}</small>
    </div>
  );
};

export default MenuItem;
