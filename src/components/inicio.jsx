import "./inicio.css";
import Button from 'react-bootstrap/Button';

function Inicio() {
  return (
    <>
    <div className="parrafoinicio">
      <h3 id='inicio-titulo'>Fundamentos de Programacion Web.</h3>
      <p id='inicio-texto1'>Bienvenidos al juego Ahorcadito realizado por el Grupo 2.</p>
    </div>
      <div className="section">
        <img src="/assets/images/imagen inicio.jpg" alt="ImagenInicio" className="inicio-img"></img>
         <p id='inicio-texto2'>Haga click en "Jugar" para poder jugar.</p>
        <Button className="boton-inicio" variant="primary" size="lg" border href={"./juego"}>Jugar</Button>{' '}
      </div>
    </>
  );
}

export default Inicio;
