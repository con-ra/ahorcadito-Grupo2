import Button from "react-bootstrap/Button";
import "./juego.css";
import { useEffect, useState } from "react";
import Alfabeto from "../json/alfabeto.json";
import Diccionario from "../json/diccionario.json";
import Vidas from "../json/vidas.json";


const Juego = () => {
  const [palabraElegida, setPalabraElegida] = useState("");
  const [palabraEnmascarada, setPalabraEnmascarada] = useState("");
  const [pista, setPista] = useState(
    'Haz click en "Obtener palabra" para empezar'
  );
  const [tecladoDeshabillitado, setTecladoDeshabilitado] = useState(true);
  const [contadorErrores, setContadorErrores] = useState(0);
  const [vidasRestantes, setVidasRestantes] = useState(Vidas[contadorErrores].img);

  /* Generar botones abecedario */
  const botones = () => {
    return Alfabeto.map((letra) => {
      return (
        <Button
          id={letra}
          key={letra}
          disabled={tecladoDeshabillitado}
          onClick={() => presionarTecla(letra)}
        >
          {letra}
        </Button>
      );
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

  /* Añadir letra presionada a una variable */
  const presionarTecla = (letra) => {
    let palabraActualizada = palabraEnmascarada.map(l => l);
    /* setLetraElegida(letra); */
    document.getElementById(letra).disabled = true;
    let banderaError = true;
    let contErrores = contadorErrores;

    for (let i = 0; i < palabraElegida.length; i++) {
      if (letra === palabraElegida[i]) {
        palabraActualizada[i] = letra;
        setPalabraEnmascarada(palabraActualizada);
        //sonido de acierto NICOLE
        banderaError = false;
      } else {
        //sonido error NICOLE
        //cambia la imagen
      }
    }

    if (banderaError) {
      contErrores++;
      setContadorErrores(contErrores);
      setVidasRestantes(Vidas[contErrores].img);
    }

    if (palabraActualizada === palabraElegida) {
      //sonido de victoria NICOLE
    }
    /* Contador de errores con bandera */
    /* Comparar palabras para victoria */
    //console.log(contadorErrores);
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
            <img src={vidasRestantes} alt="imágen ahorcado"></img>
          </article>
        </section>
        <footer className="inf-game-area">
          <div className="teclado"> {botones()} </div>
          <div className="controles">
            <Button
              className="button-iniciar"
              variant="secondary"
              onClick={() => iniciarJugada()}
            >
              Obtener palabra
            </Button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Juego;
