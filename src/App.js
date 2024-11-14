import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./components/NewCard/NewsCard";
import "./App.css";
import TempChanger from "./Domaci/TemperatureChanger/TempChanger";
import FromCard from "./Domaci/FormCard/FormCard";
import FormCard from "./Domaci/FormCard/FormCard";

// const news = {
//   <div className='container'>
//       <NewsCard
//         lajkovi={100}
//         title='7 golova u Novom Pazaru'
//         description='U Novom Pazaru, na Gradskom Stadionu, utakmmica i zavrsilsa se rezultatom 3:4'
//         date='22.10.2024'
//       />
//       <NewsCard
//         lajkovi={10}
//         title='Kulturni Centar u novom pazaru zabranjuje deci  da gledaju film terifer'
//         description='Kulturni centar u novom pazaru zabranjuje deci da gledajufilm terifer ispod 18 godina nzm sto '
//         date='23.10.2024'
//       />
//       <NewsCard
//         lajkovi={1000}
//         title='suncano vreme u novom pazaru'
//         description='suncano u pazaru najavljeno je 24+'
//         date='23.10.2024'
//       />
//     </div>
// }

// const numChanger = {
//   const [broj, setBroj] = useState(0);

//   const generateRandomNumber = () => {
//     const randomNumber = Math.floor(Math.random() * 100);
//     setBroj(randomNumber);
//   };

//   return (
//     <div className='container' style={{ flexDirection: "column" }}>
//       <h1>{broj}</h1>
//       <div>
//         <button
//           style={{
//             padding: "5px 10px",
//             border: "none",
//             borderRadius: 12,
//             outline: "none",
//             backgroundColor: "lightblue",
//             color: "black",
//             fontSize: 24,
//             cursor: "pointer",
//           }}
//           // onClick={() => setBroj(broj + 1)}
//           onClick={generateRandomNumber}
//         >
//           Povecaj na 5
//         </button>
//       </div>

//       <div
//         style={{
//           height: 300,
//           width: 300,
//           border: "2px solid black",
//           backgroundColor: broj % 2 === 0 ? "beige" : "lightblue",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {broj % 2 === 0 ? <p>Broj je paran</p> : <p>Broj je neparan</p>}
//       </div>
//     </div>
// }
///////////////////////////////////
// states objekta
// const [user, setUser] = useState({
//   ime: "Aldin",
//   prezime: "Halilovic",
// });

// const promeniImeIprezime = () =>
//   // setUser((prev) => ({...prev, ime: "Maid"}))
//   setUser((prev) => {
//     return {
//       ...prev,
//       ime: "Maid",
//     };
//   });

// console.log(user);

// state niza
// const [voce, setVoce] = useState([
//   "Jabuka",
//   "Banana",
//   "Kruska",
//   "Limun",
//   "Tresnja",
//   "Kokos",
//   "Tresnja",
// ]);

// const dodajVoce = () => {
//   // const novaVocka = () => setVoce((prev) => [...prev, "visnja"]);

//   const novoVoce = prompt("Unesi voce");

//   if (!novoVoce) return;

//   if (voce.find((vocka) => vocka.toLowerCase() === novoVoce.toLowerCase())) {
//     alert("ima voce");
//   } else {
//     setVoce((prev) => [...prev, novoVoce]);
//     console.log("nema voce");
//   }
// };
//   <ol>
//     {voce.map((vocka) => (
//       <li>{vocka}</li>
//     ))}
//   </ol>;
///////////////////////////////

function App() {
  // const [formDate, setFormDate] = useState ({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   gender: "",

  // })

  // const [broj, setBroj] = useState(13);
  // const [zadaci, setZadaci] = useState([]);
  // const [loading, setLoading] = useState(false);

  //samo za fetchanje podataka
  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://dummyjson.com/todos")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => data.todos)
  //     .then((todos) => setZadaci(todos))
  //     .finally(() => setLoading(false));
  // }, []);

  // axios
  // .get("https://dummyjson.com/todos")
  // .then((data) => console.log();
  // )

  // console.log(zadaci, "zadaci");

  // //state usera jednog i dva defult --- state

  const [tenUsers, setTenUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes?limit=10")
      .then((res) => res.json())
      .then((data) => setTenUsers(data.quotes));
  }, []);

  console.log(tenUsers, "users");

  return (
    <div
      className='container'
      style={{ fontSize: 32, justifyContent: "space-evenly" }}
    >
      <button
        style={{
          adding: "5px 10px",
          border: "none",
          borderRadius: 12,
          outline: "none",
          backgroundColor: "lightblue",
          color: "black",
          fontSize: 24,
          cursor: "pointer",
        }}
        // onClick={}
      >
        klikni
      </button>
    </div>
  );
  //   <div>
  //     {loading ? (
  //       <h1>Fetcha podatke...</h1>
  //     ) : (
  //       zadaci.map((zadatak) => (
  //         <h3>
  //           {zadatak.id}. {zadatak.todo}.
  //         </h3>
  //       ))
  //     )}
  //   </div>
  //{" "}
  // </div>;

  //react dev

  // <div style={containerStyle}>
  //   <form>
  //     <label>
  //       First name:
  //       <input
  //         type='text'
  //         name='firstName'
  //         value={FormData.firstName}
  //         style={{margin: 10, padding: 8, width: "100%" }}
  //       ></input>
  //     </label>
  //   </form>
  // </div>

  // <div className='container' style={{ gap: 50, flexDirection: "column" }}>
  //   {/* <div style={{ display: "flex", gap: 10 }}>
  //     <h1>{user.ime}</h1>
  //     <h1>{user.prezime}</h1>
  //   </div> */}

  // //   <button
  //     style={{
  //       adding: "5px 10px",
  //       border: "none",
  //       borderRadius: 12,
  //       outline: "none",
  //       backgroundColor: "lightblue",
  //       color: "black",
  //       fontSize: 24,
  //       cursor: "pointer",
  //     }}
  //     onClick={}
  //   >
  //     klikni
  //   </button>
  // </div>
  // );
}

export default App;
