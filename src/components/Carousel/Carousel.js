import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/images/slider1.webp';
import image2 from '../../assets/images/slider2.webp';
import image3 from '../../assets/images/slider3.jpg';
import { Container } from 'react-bootstrap';


function Slider() {
  return (
    <>
    <Container>
      <Carousel>
        <Carousel.Item>
          <img src={image1} alt="First slide" />
          <Carousel.Caption>
          <h3>CH PRIVÉ</h3>
            <p>Fragancia masculina que combina la faceta adictiva del whisky con la intensidad y la riqueza del cuero negro, con algunas notas de lavanda y cardamomo.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={image2} alt="First slide" />
          <Carousel.Caption>
            <h3>JPG LE BEAU</h3>
            <p>El Eau de Toilette masculino, contruído alrededor de la adictiva hava tonka y la madera de coco combinado con la frescura faceta de la bergamota. Una estela fresca y poderosa para un hombre ultra-sexy.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
        <img src={image3} alt="First slide" />
          <Carousel.Caption style={{ color: 'black'}}>
            <h3>VICHY MINERAL 89</h3>
            <p>Minéral 89 contiene 89% de agua volcánica de Vichy que refuerza la función barrera de la piel para protegerla cada día de las agresiones exteriores como la polución, el estrés y la fatiga. Gracias a su fórmula con ácido hialurónico, tu piel estará hidratada, tonificada e iluminada día tras día.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
    </>
  );
}


export default Slider;