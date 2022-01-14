import React from "react";
import style from "./card.module.css";
import Image from "next/image";

function Card(props) {
  const { h4, h1, h3, article, image } = props;

  return (
    <section className={style.body}>
      <div className={style.text}>
        <h4>{h4}</h4>
        <h1>{h1}</h1>
        <h3>{h3}</h3>
        <article>{article}</article>
      </div>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className={style.imageContainer}
      ></div>
    </section>
  );
}

export default Card;
