import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import integrantes from '../json/integrantes.json';
import './integrantes.css'

function Integrantes(){ 
  return (
    <div className='integrantes'>
      {integrantes.map(lista =>
        <Card className='card-full' bg="dark">
          <Card.Img className='card-img' variant="top" src={lista.img} />
          <Card.Body>
            <Card.Title>{lista.nombre}</Card.Title>
            <Card.Text>
              <Button variant='outline-light' border href={lista.github}>{lista.usuario}</Button>
              <hr className='linea-central-tarjeta'/>
              <p>Edad: {lista.edad} años</p>
              <p>Intereses: {lista.intereses}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default Integrantes;
