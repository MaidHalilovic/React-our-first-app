import React, { useState } from "react";
import "./tempChanger.css";

function TempChanger() {
  const [broj, setBroj] = useState(0);

  const GenerateRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 81) - 40;
    setBroj(randomNum);
  };

  return (
    <div
      className='outerContainer'
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        className='container'
        style={{
          border: "solid black 1px",
          borderRadius: 10,
          width: 550,
          gap: 100,
          height: 600,
          flexDirection: "column",
          backgroundColor:
            broj >= 20 ? "yellow" : broj <= -10 ? "blue" : undefined,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
          }}
        >
          {broj >= 20 ? <h1>Toplo je mnogo</h1> : undefined}
          {broj <= -10 ? <h1>Hladno je (obuci jaknu)</h1> : undefined}
        </div>
        <h1>{broj}</h1>

        <div>
          <button
            style={{
              border: "solid black 1",
              borderRadius: 5,
              outline: "none",
              backgroundColor: "black",
              color: "white",
              fontSize: 24,
              cursor: "pointer",
              height: 40,
              width: 250,
            }}
            onClick={GenerateRandomNum}
          >
            Promeni Temperaturu
          </button>
        </div>
      </div>
    </div>
  );
}

export default TempChanger;
