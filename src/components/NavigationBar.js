import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../img/logo.jpeg'
import './styles/NavigationBar.css'

const NavigationBar = () => {
    return (
        <header>
            <Navbar expand="lg" collapseOnSelect>
                <img id='logo' alt='logo' src={logo} />
                <Container>

                    <LinkContainer to='/'>

                        <Navbar.Brand href="/">Neolog Agencia Gls</Navbar.Brand>
                    </LinkContainer>

                </Container>
            </Navbar>
        </header>

    )
}
export default NavigationBar;