import React from "react";
import InstructorCard from "../../components/instructorCard/instructorCard";
import { instructorData, pData, redpData } from "./data";
import style from "./scoala.module.css";

function Scoala() {
  return (
    <main>
      <div className={style.background}></div>
      <div className={style.mainText}>
        <h3>SCOALA DE SKI SNOWBOARD DIN POIANA BRASOV TE</h3>
        <h1>INVATA SA SCHIEZI CA UN PROFESIONIST !</h1>
        <article>
          <p>{pData}</p>
          <p className={style.red}>{redpData}</p>
        </article>
      </div>
      <div className={style.echipaText}>
        <h3>
          MEREU ALATURI DE DUMNEAVOASTRA , R&J SCOALA DE SKI DIN POIANA BRASOV
        </h3>
        <h1>ECHIPA NOASTRA</h1>
      </div>
      <div className={style.instructorList}>
        {instructorData.map((instructor) => {
          return <InstructorCard key={instructor.name} data={instructor} />;
        })}
      </div>
    </main>
  );
}

export default Scoala;
