import Button from "react-bootstrap/Button";
import "./juego.css";
import { useState } from "react";
import Alfabeto from "../json/alfabeto.json";
import Diccionario from "../json/diccionario.json";

const Juego = () => {
  const [palabraElegida, setPalabraElegida] = useState("");
  const [palabraEnmascarada, setPalabraEnmascarada] = useState("");
  const [pista, setPista] = useState(
    'Haz click en "Obtener palabra" para empezar'
  );
  const [tecladoDeshabillitado, setTecladoDeshabilitado]= useState(true);

  /* Generar botones abecedario */
  const botones = () => {
    return Alfabeto.map((letra) => {
      return <button key={letra} disabled={tecladoDeshabillitado}> {letra} </button>;
    });
  };

  /* Iniciar la jugada */
  const iniciarJugada = () => {
    let indPalabra = Math.floor(Math.random() * Diccionario.length);
    let arrayPalabra = Array.from(Diccionario[indPalabra].palabra);
    let arrayPalabraEnmascarada = Array(arrayPalabra.length).fill("_");

    setPalabraElegida(arrayPalabra);
    setPista(Diccionario[indPalabra].pista);
    setPalabraEnmascarada(arrayPalabraEnmascarada);
    setTecladoDeshabilitado(false);

  };

  return (
    <>
      <div className="full-game-area">
        <section className="sup-game-area">
          <article className="left-game-area">
            <div className="pistas-area">
              <p> {pista} </p>
            </div>
            <div className="palabra-area">
              <p> {palabraEnmascarada} </p>
            </div>
          </article>
          <article className="right-game-area">
            <img src="" alt="imágen ahorcado"></img>
          </article>
        </section>
        <footer className="inf-game-area">
          <div className="teclado"> {botones()} </div>
          <div className="controles">
            <button className="button-iniciar" onClick={() => iniciarJugada()}>
              Obtener palabra
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Juego;
