import Carousel from 'react-bootstrap/Carousel';
import './integrantes.css'

function Integrantes(){ 
  return (
    <Carousel>
      <Carousel.Item>
        <img src="/assets/images/integrantes_LópezPolo.jpg" alt="López Polo"/>
        <Carousel.Caption>
          <h3>Lucas Santiago López Polo</h3>
          <p><a href="https://github.com/EruLuka">GitHub</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/assets/images/integrantes_MendivilCabrera.jpeg" alt="Mendivil Cabrera"/>
        <Carousel.Caption>
          <h3>Nicole Estefania Mendivil Cabrera</h3>
          <p>
            <a href="https://github.com/nicolee567">GitHub</a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/assets/images/integrantes_Planckensteiner.jpg" alt="Planckensteiner"/>
        <Carousel.Caption>
          <h3>German Matias Planckensteiner</h3>
          <p>
          <a href='https://github.com/odoexx'> GitHub </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/assets/images/integrantes_SosaCorrea.jpeg" alt="Sosa Correa"/>
        <Carousel.Caption>
          <h3>Agustín Cesar Sosa Correa</h3>
          <p>
            <a href="https://github.com/Gryuker">GitHub</a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/assets/images/integrantes_Velazquez.jpeg" alt="Velazquez"/>
        <Carousel.Caption>
          <h3>Conrado Abel Dario Velazquez</h3>
          <p>
            <a href='https://github.com/con-ra'> GitHub </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Integrantes;
