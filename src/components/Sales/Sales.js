import Image from 'react-bootstrap/Image';
import gif from '../../assets/images/sales.gif'
import banner from '../../assets/images/bannertarjetas.jpg'
import { Container } from 'react-bootstrap';

function Sales() {
    return(
    <>
    <Container className="d-flex flex-column align-items-center justify-content-center">
        <Image src={gif} fluid className="my-4" />
        <Image src={banner} fluid className="mb-4" />
    </Container>
    </>
  );
}

export default Sales;