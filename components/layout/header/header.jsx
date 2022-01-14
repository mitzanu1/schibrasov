import React from "react";
import style from "./header.module.css";
import Image from "next/image";
import logo from "../../../public/ScoalaSki.png";
import advisor from "../../../public/RJ-ski-snowboard-school-in-Poiana-Brasov-TripAdvisor.png";
import advisor2 from "../../../public/the-best-ski-school-poiana-brasov.png";
import axios from "axios";
import Link from "next/link";

function Header() {
  const [menuToogle, setMenuToogle] = React.useState(false);

  // const [weather, setWeather] = React.useState({});

  // React.useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.openweathermap.org/data/2.5/weather?lat=45.53&lon=25.58&exclude=hourly,daily&appid=58254c51abc9f3d2a51f74cc0df62e8f&units=metric`
  //     )
  //     .then((result) => setWeather(result));
  // }, []);

  return (
    <header className={style.main}>
      <div className={style.logoContent}>
        <div className={style.logo}>
          <div className={style.logoImg}>
            <a
              target="_blanck"
              rel="noopener noreferrer"
              href="http://skipoianabrasov.ro"
            >
              <Image src={logo} alt="ScoalaSki" layout="intrinsic" />
            </a>
          </div>

          <div className={style.logoText}>
            <h4>SKI POIANA BRASOV</h4>
            <p>{`SKI / SNOWBOARD SCHOOL & RENTAL POIANA BRASOV ROMANIA`}</p>
          </div>
          <div className={style.advisorImg}>
            <a
              target="_blanck"
              rel="noopener noreferrer"
              href="https://www.tripadvisor.com/Attraction_Review-g616229-d9820986-Reviews-R_J_Ski_School_Poiana_Brasov-Poiana_Brasov_Brasov_County_Central_Romania_Transylv.html"
            >
              <Image
                src={advisor}
                alt="RJ-ski-snowboard-school-in-Poiana-Brasov-TripAdvisor"
                layout="intrinsic"
              />
            </a>
            <a
              target="_blanck"
              rel="noopener noreferrer"
              href="https://www.tripadvisor.com/Attraction_Review-g616229-d9820986-Reviews-R_J_Ski_School_Poiana_Brasov-Poiana_Brasov_Brasov_County_Central_Romania_Transylv.html"
            >
              <Image
                src={advisor2}
                alt="RJ-ski-snowboard-school-in-Poiana-Brasov-TripAdvisor"
                layout="intrinsic"
              />
            </a>
          </div>
        </div>

        <div className={style.contact}>
          <a href="mailto:janin@instructor-ski.ro">
            &#9993; janin@instructor-ski.ro{" "}
          </a>
          <a href="tel:+40 745 526526">&#128383; +40 745 526526</a>
          <a href="tel:+40 722 275627">&#128383; +40 722 275627</a>
        </div>
      </div>
      <nav>
        <button>Meniu &#9776;</button>
        <ul className={style.nav}>
          <li>
            <Link href="/">Acasa</Link>
          </li>
          <li>
            <Link href="/scoala-ski-snowboard">{`Scoala Ski & Snowboard`}</Link>
          </li>
          <li>
            <Link href="/inchirieri-ski-snowboard">{`Inchirieri Ski & Snowboard`}</Link>
          </li>
          <li>
            <Link href="/tarife">Tarife</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
