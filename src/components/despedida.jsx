import "../components/despedida.css";

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
        </div></>
    )
}
export default Despedida;
