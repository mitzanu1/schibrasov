import style from "./index.module.css";
import background from "../public/skipoianabrasov.png";
import Image from "next/image";
import Card from "../components/card/card";

export default function Home() {
  const data = [
    {
      id: 0,
      h4: "BINE ATI VENIT IN",
      h1: "POIANA BRASOV SKI SI SNOWBOARD RESORT",
      h3: "ISTORIA PE SCURT:",
      article:
        "Infiintata in 1895,  deservea ca loc turistic pentru Brasov. Prima cabana a fost construita in 1904. In 1906 Poiana Brasov a fost recunoscuta ca statiune de iarna si trei ani mai tarziu se desfasurau primele competitii de iarna. In 1951 au tinut loc jocurile internationale de iarna a studentilor. Privita de pe creasta Masivului Postavarul, statiunea Poiana Brasov pare o mica oaza în împaratia muntilor, îmbracati în haina verde a padurilor de molid si fag, în care vilele si hotelurile cu arhitectura pe cât de variata pe atât de moderna imprima un plus de pitoresc,  fiind de asemenea cea mai mare statiune  de ski si snowboard din Romania.",
      image: "/img1.jpg",
    },
    {
      id: 1,
      h4: "3 MOTIVE PENTRU CARE",
      h1: "AR TREBUI SĂ  ALEGEȚI  POIANA BRASOV",
      h3: "",
      article: `
SITUATA IN CENTRUL TARII

Foarte usor de ajuns din orice colt al Romaniei,  aeroportul Otopeni se afla la o distanta de 159 km , drum parcurs in aproximativ 2,30 minute, pe una din cele doua rute DN1 si DN1A.

SERVICII DE CALITATE 

Chiar si pentru turistii cei mai pretentiosi, Poiana Brasov dispune de hoteluri modernizate in ultimii doi ani , hoteluri de la 4 stele, pana la pensiuni de 2 stele, unde calitatea este la ea acasa.
Restaurantele cu specific romanesc, Restaurantul  Vanatorul, Coliba Haiducilor, Sura Dacilor si renumita Stana Turistica modernizata in 2019, tin si ele nivelul ridicat privind calitatea serviciilor.
De asemenea in Poiana Brasov  gasesti cele mai bune partii de ski si snowboard din Romania,  centre moderne pentru inchirierea echipamentelor specifice acestor sporturi , scoli de ski si snowboard cu  instructori de ski calificati , instructori ski profesionisti atestati ISIA pentru fiecare nivel si varsta .
R&J Poiana Brasov Scoala Ski si Snowboard  va sta la dispozitie cu cel mai nou centru de ski din Poiana  Brasov , echipamente de ski de calitate , servisate periodic, instructori de ski profesionisti atestati la nivel international. Cursurile de ski pot fi atat pentru copii cat si pentru adulti, cursuri de ski individuale sau de grup

PREȚURI ACCESIBILE OFERITE DE R&J POIANA BRASOV SCOALA SKI SI SNOWBOARD

Poiana Brasov ski si snowboard ofera clientilor sai tarife accesibile pentru toate bugetele, cursuri , lectii de ski cu program prestabilit  in functie de nevoile d-voastra, fie ca doriti lectii de ski individuale sau de grup.
Inchirierea echipamentelor de ski si snowboard sunt disponibile de la cele de incepatori, pana la cele de avansati, race / VIP.
`,

      image: "/img2.jpg",
    },
    {
      id: 2,
      h4: "OFERTELE STATIUNII",
      h1: "POIANA BRASOV",
      h3: "",
      article: `
OFERTA SPECIFICA SEZONULUI RECE

- Practicarea schiului alpin si a snowboard-ului pe pârtiile cu diferite grade de dificultate, este asigurat de transportul  pe cablu, in diferite variante ( teleski, telegondola , telecabina, telescaun).

-Practicarea saniusului pe pârtiile special amenajate dela baza partiei Bradul.

- Practicarea patinajului pe patinoarul artificial.

- Plimbări cu sănii trase de cai.

- Invatarea schiului cu ajutorul instructorilor de specialitate din cadrul scolii de schi R&J Ski School,  specializati mai ales în schi alpin pentru toate nivelurile, de la începatori la avansati ( tehnica ).

- Centrul R&J Ski Rental  ofera închirierea materialelor sportive, schi-uri, snowboard-uri, ochelari, manusi , casti, etc

 
OFERTA SPECIFICA SEZONULUI CALD

- Drumetii montane pe jos sau cu bicicleta spre Masivul Postavarul.

- Tenis de câmp pe terenurile amenajate în apropierea hotelurilor.

- Minigolf si handbal pe terenul din zona lacului.

- Cursuri de calarie si practicarea echitatiei în împrejurimi.

- Windsurfing, yolle si ambarcatiuni pe lacul Moacsa (40 Km).

- Plimbari cu ATV-urile .





        `,
      image: "/img3.png",
    },
    {
      id: 3,
      h4: "MOTIVE PENTRU CARE",
      h1: "AR TREBUI SĂ  ALEGEȚI  POIANA BRASOV  IARNA",
      h3: "",
      article: `
PARTII DE SCHI SI SNOWBOARD

Bradul:  lungime 430 m (diferenta de nivel 85 m), nivel de dificultate – usor;
Kanzel:  lungime 350 m (diferenta de nivel 138 m), nivel de dificultate ridicat;
Lupului:  lungime 3266 m (diferenta de nivel 775 m), nivel de dificultate ridicat;
Sulinar:  lungime 2820 m (diferenta de nivel 645 m), nivel de dificultate mediu;
Ruia:  lungime 535 m (diferenta de nivel 198 m), nivel de dificultate ridicat;
Subteleferic:  lungime 2200 m (diferenta de nivel 280 m), nivel de dificultate ridicat;
Drumul Rosu:  lungime 4750 m (diferenta e nivel 630 m), nivel de dificultate – usor;

INSTALATII DE TRANSPORT PE CABLU

teleschi (partiile Bradul, Kanzel ,  Ruia si Subteleferic),
telecabina (partiile Kanzel, Lupului, Sulinar, Subteleferic si Drumul Rosu)
telegondola (partiile Lupului, Sulinar, Subteleferic si Drumul Rosu).
telescaun ( partiile Lupului, Drumul Rosu )

PREȚURI ACCESIBILE

Toate partiile de ski sunt dotate cu tunuri pentru zapada artificiala.

In perioada   decembrie  – aprilie in functie si de stratul de zapada scoala de ski R&J Poiana Brasov , va asteapta pentru cursurile de ski si snowboard , detalii pe  www.scoalaski.ro
        `,
      image: "/img4.jpg",
    },
  ];

  return (
    <>
      <div className={style.background}>
        {/* <Image src={background} alt="ScoalaSki" layout="fill" /> */}
      </div>
      <div>
        <section className={style.mainText}>
          <h4>
            INVATA SA SKIEZI IN POIANA BRASOV, CEA MAI RENUMITA STATIUNE DE SKI
            SI SNOWBOARD DIN ROMANIA CU
            <a style={{ color: "red" }}>{" R&J "}</a>
            POIANA BRASOV SCOALA SKI SI SNOWBOARD
          </h4>
          <h1>SKI-UL NU ARE VARSTA !</h1>
          <h3>POIANA BRASOV 2021 - 2022</h3>
        </section>
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              h4={item.h4}
              h1={item.h1}
              h3={item.h3}
              article={item.article}
              image={item.image}
            />
          );
        })}
      </div>
    </>
  );
}
