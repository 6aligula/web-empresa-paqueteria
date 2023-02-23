import { Carousel, Image } from 'react-bootstrap';
import grassBefore from "../img/carusel/first.jpg";
import grassAfter from "../img/carusel/second.jpg";
import naturalGrassA from "../img/carusel/third.jpg";
import naturalGrassF from "../img/carusel/four.jpg";
//import './styles/Carro.css'


const CarouselDady = () => {

    return (
        <Carousel pause='hover' className='bg-dark'>
            <Carousel.Item key='1'>
                <Image src={grassBefore} alt="First slide" fluid />
                <Carousel.Caption className='carousel.caption'>
                    {/* <h3>SIN CESPED ARTIFICIAL</h3> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image src={grassAfter} alt="Second slide" fluid />
                <Carousel.Caption className='carousel.caption'>
                    {/* <h3>CON CESPED ARTIFICIAL</h3> */}
                </Carousel.Caption >
            </Carousel.Item>

            <Carousel.Item>
                <Image src={naturalGrassA} alt="Third slide" fluid />
                <Carousel.Caption className='carousel.caption'>
                    {/* <h3>SIN CESPED NATURAL</h3> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image src={naturalGrassF} alt="Third slide" fluid />
                <Carousel.Caption className='carousel.caption'>
                    {/* <h3>COLOCANDO CESPED NATURAL</h3> */}
                </Carousel.Caption>
            </Carousel.Item>

            {/* <Carousel.Item>
                <Image src={naturalGrassM} alt="Third slide" fluid />
                <Carousel.Caption className='carousel.caption'>
                    <h3>CON CESPED NATURAL</h3>
                </Carousel.Caption>
            </Carousel.Item> */}

        </Carousel>

    );
}
export default CarouselDady