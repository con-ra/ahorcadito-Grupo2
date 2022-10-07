import "./despedida.css";
import Button from 'react-bootstrap/Button';

function Despedida(){
    return(
         <>
        <div className='Parrafo'>
            <h3 id='despedida-titulo'>Fundamentos de Programacion Web.</h3>
            <p id='despedida-texto1'>Espereramos que les haya divertido nuestro juego.</p>
            <ul id='despedida-texto2'>Muchas gracias por jugarlo.</ul>
        </div>
        <div className='Despedida'>
            <img src='/assets/images/Imagen Despedida.jpg' alt="Imagen Despedida"></img>
            <p id="despedida-texto3">Para volver, haga click en el siguiente boton.</p>
            <Button className="boton-despedida" variant="primary" size="lg" border href={"./"}>Volver a Inicio</Button>{' '}
        </div></>
    )
}

export default Despedida;
