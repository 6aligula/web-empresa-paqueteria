import React from "react";
import CarouselDady from '../components/CarouselDady';
import Cards from "../components/Cards";
import { Row, Col } from 'react-bootstrap';
import coverSegui from '../img/coverSeguimiento.jpg';
import coverContacto from '../img/coverContacto.jpg';
import '../components/styles/Main.css';

const Main = () => {

    return (
        <div >
            <br></br>
            <CarouselDady />
            <br></br>
            <h1> Neolog, Agencia de transporte en Sant Boi de Llobregat.</h1>
            <h2>Transporte, paquetería, mensajería y envío urgente. Envíos nacionales e internacionales de paquetería y correos.</h2>
            <br></br>
            <Row>
                <Col>
                    <Cards
                        pathPhoto={coverSegui}
                        path='https://www.gls-spain.es/es/'
                        title='Seguimiento de pedidos'
                        nameButton='Seguimiento' />
                </Col>
                <Col>
                    <Cards
                        pathPhoto={coverContacto}
                        path='./contacta'
                        title='Contacto con nosotros'
                        nameButton='Contactar' />
                </Col>

            </Row>
            <br></br>
        </div>
    )
}

export default Main