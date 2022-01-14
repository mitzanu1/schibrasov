import React from "react";
import style from "./footer.module.css";
import Image from "next/image";
import { parteneriLogo, parteneri } from "./parteneriData";

function Footer() {
  return (
    <div className={style.main}>
      <div className={style.logos}>
        {parteneriLogo.map((item) => {
          const { image, alt, link } = item;
          return (
            <a key={alt} href={link} target="_blanck" rel="noopener noreferrer">
              <Image
                src={image}
                alt={alt}
                layout="intrinsic"
                width="250px"
                height="120px"
              ></Image>
            </a>
          );
        })}
      </div>
      <div className={style.parteneriContact}>
        <div className={style.parteneri}>
          <h3>Partenerii Nostri</h3>
          <ul>
            {parteneri.map((item) => {
              const { link, partener } = item;
              return (
                <li key={partener}>
                  <a href={link} target="_blanck" rel="noopener noreferrer">
                    {partener}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.contact}>
          <h3>Contact</h3>
          <p>
            <a href="mailto:janin@instructor-ski.ro">
              &#9993; janin@instructor-ski.ro
            </a>
          </p>
          <p>
            <a href="tel:+40 745 526526">&#128383; +40 745 526526</a>
          </p>
          <p>
            <a href="tel:+40 722 275627">&#128383; +40 722 275627</a>
          </p>
        </div>
      </div>
      <div className={style.trademark}>
        <h2>Copyright © 2021 Ski Poiana Brasov</h2>
      </div>
    </div>
  );
}

export default Footer;
