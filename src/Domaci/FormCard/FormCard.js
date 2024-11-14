import React, { useEffect, useState } from "react";
import "./formCard.css";

function FormCard() {
  const [user, setUser] = useState({
    ime: "",
    prezime: "",
    gender: "",
    age: "",
    number: "",
    hobby: "",
  });

  const [cards, setCards] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (
      user.ime &&
      user.prezime &&
      user.gender &&
      user.age &&
      user.number &&
      user.hobby
    ) {
      setCards((prevCards) => [...prevCards, user]);
      setUser({
        ime: "",
        prezime: "",
        gender: "",
        age: "",
        number: "",
        hobby: "",
      });
    }
  };

  const [apiuseri, setApiuseri] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setApiuseri(data.users));
  }, []);

  return (
    <div
      className='out-Container'
      style={{
        gap: 200,
        position: "relative",
        right: 10,
        top: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "top",
      }}
    >
      <div
        className='second-container'
        style={{
          border: "solid gray 1px",
          width: 800,
          height: 600,
          overflowY: "auto",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              padding: "20px",
              border: "1px solid black",
              marginBottom: "10px",
            }}
          >
            <h2>Kartica korisnika</h2>
            <p>Ime: {card.ime}</p>
            <p>Prezime: {card.prezime}</p>
            <p>Pol: {card.gender}</p>
            <p>Godine: {card.age}</p>
            <p>Broj: {card.number}</p>
            <p>Hobi: {card.hobby}</p>
          </div>
        ))}

        <div>
          <h2>podaci iz api-a:</h2>
          {apiuseri.length > 0 ? (
            apiuseri.map((el) => (
              <div
                style={{
                  padding: "10px",
                  borderBottom: "1px solid gray",
                }}
              >
                <h3>Id:{el.id}</h3>
                <p>
                  Ime: {el.Name} {el.lastName}
                </p>
                <p>Email: {el.email}</p>
                <p>Starost: {el.age}</p>
                <p>ip: {el.ip}</p>
                <p>phone: {el.phone}</p>
              </div>
            ))
          ) : (
            <p>Podaci se učitavaju...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FormCard;

// key={apiUser.id}
//useEffect--je hook koji omogucava izvrsavanje efekata kao npr api,vremenski intervali nakon
// prikazivanja u komponenti

//useState -- je hook koji omogucava korisenjem vrednostima unutar komponente
