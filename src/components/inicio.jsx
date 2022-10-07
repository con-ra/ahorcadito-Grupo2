import "./inicio.css";
import Button from "react-bootstrap/Button";

function Inicio() {
  return (
    <>
      <section className="parrafoinicio">
        <h3 id="inicio-titulo">
          Fundamentos de Programacion Web.
          </h3>
        <p id="inicio-texto1">
          Bienvenidos al juego Ahorcadito realizado por el Grupo 2.
        </p>
      </section>
      <section className="contenedor">
        <img
          src="/assets/images/imagen inicio.jpg"
          alt="ImagenInicio"
          className="inicio-img"
        ></img>
        <p id="inicio-texto2">Haga click en "Jugar" para poder comenzar.</p>
        <Button
          className="boton-inicio"
          variant="primary"
          size="lg"
          border="ligth"
          href={"./juego"}
        >
          Jugar
        </Button>{" "}
      </section>
    </>
  );
}

export default Inicio;
