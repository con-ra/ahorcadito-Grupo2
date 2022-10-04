import Button from "react-bootstrap/Button";
import "./juego.css";
import { useState } from "react";

const Juego = () => {
  const botones = () => {
    let abecedario = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ",
      "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    return abecedario.map((letra) => {
      return <button key={letra}>{letra}</button>;
    });
  };

  return (
    <>
      <div className="full-game-area">
        <section className="sup-game-area">
          <article className="left-game-area">
            <div className="pistas-area"></div>
            <div className="palabra-area"></div>
          </article>
          <article className="right-game-area">
            <img src="" alt="imágen ahorcado"></img>
          </article>
        </section>
        <footer className="inf-game-area">{botones()}</footer>
      </div>
    </>
  );
};

export default Juego;
