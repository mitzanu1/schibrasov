import React from "react";
import Image from "next/image";
import style from "./instructorCard.module.css";

function InstructorCard(props) {
  const { image, name, role, details } = props.data;
  const [detali, setDetali] = React.useState(false);

  return (
    <div className={style.instructorCard}>
      <div className={style.image}>
        <Image src={image} width="100px" height="100px" layout="fixed"></Image>
      </div>
      <div className={style.textContainer}>
        <div className={style.text}>
          <h2>{name}</h2>
          <h4>{role}</h4>
          {detali && <p>{details}</p>}
        </div>
        <button onClick={() => setDetali(!detali)}>
          {detali ? "-" : "+"} detalii
        </button>
      </div>
    </div>
  );
}

export default InstructorCard;
