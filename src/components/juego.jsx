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
  const [vidasRestantes, setVidasRestantes] = useState(Vidas[0].img);
  const [finJuego, setFinJuego] = useState(false);

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
    let banderaError = true;
    let contErrores = contadorErrores;
    /* Deshabilitar tecla presionada */
    let palabraActualizada = palabraEnmascarada.map(l => l);
    document.getElementById(letra).disabled = true;

    /* Controlar si la letra está en la palabra y mostramos todas sus ocurrencias */
    for (let i = 0; i < palabraElegida.length; i++) {
      if (letra === palabraElegida[i]) {
        palabraActualizada[i] = letra;
        setPalabraEnmascarada(palabraActualizada);
        banderaError = false;
        //sonido de acierto
      } else {
        //sonido error
      }
    }

    /* Si la letra no está en la palabra incrementar el contador de errores y actualizar imágen ahorcado */
    if (banderaError) {
      contErrores++;
      console.log(contErrores," - ",Vidas.length);
      if (contErrores <= (Vidas.length-1)){
        setContadorErrores(contErrores);
        setVidasRestantes(Vidas[contErrores].img);
      }else{
        setVidasRestantes("/assets/images/juego_perder.png");
        setFinJuego(true);
      }
    }
    console.log(palabraActualizada," - ",palabraElegida);
    console.log(palabraActualizada === palabraElegida);
    
    if (palabraActualizada.every((value, index) => value === palabraElegida[index])) {
      //Deshabilitar teclado
      //Mostrar imágen victoria
      //sonido de victoria NICOLE
      setVidasRestantes("/assets/images/juego_ganar.png");
      setFinJuego(true);
    }
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
