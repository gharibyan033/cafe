import React from "react";
import s from "./Card.module.sass";
import { Link } from "react-router";

const Card = ({ cocktails }) => {
  const { id, name, price, img } = cocktails;
  return (
    <Link to={`/details/${id}`} className={s.card}>
      <div className={s.img}>
        <img src={img} alt="Margarita" />
      </div>
      <div className={s.info}>
        <div className={s.name}>{name}</div>
        <div className={s.price}>
          {price}
          <span className={s.currency}>&#1423;</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;