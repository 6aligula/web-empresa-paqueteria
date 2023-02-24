import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import AddButton from '../components/AddButton';
import FormContainer from '../components/FormContainer';

import '../components/styles/Lavabos.css';

const Contacta = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nif, setNif] = useState('');
    const [address, setAddress] = useState('');
    const [poblacion, setPoblacion] = useState('');
    const [provincia, setProvincia] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (

        <FormContainer >
            <AddButton className='home'>Volver</AddButton>
            <br></br>
            <h1>Formulario de contacto</h1>

            <Form action="https://formsubmit.co/agencia737.gerencia@gls-spain.es" method="POST" >
                <Form.Group controlId='name'>
                    <Form.Label>Nombre*</Form.Label>
                    <Form.Control
                        required
                        name='name'
                        type='Nombre'
                        placeholder='Introduzca nombre'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='lastName' className='py-3'>
                    <Form.Label>Apellidos*</Form.Label>
                    <Form.Control
                        required
                        type='lastName'
                        name='Apellidos'
                        placeholder='Introduzca Apellidos'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='nif' className='py-3'>
                    <Form.Label>NIF/CIF*</Form.Label>
                    <Form.Control
                        required
                        type='nif'
                        name='NIF'
                        placeholder='NIF/CIF'
                        value={nif}
                        onChange={(e) => setNif(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='address' className='py-3'>
                    <Form.Label>Dirección*</Form.Label>
                    <Form.Control
                        required
                        type='address'
                        name='Dirección'
                        placeholder='Introduzca dirección'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='Población' className='py-3'>
                    <Form.Label>Población*</Form.Label>
                    <Form.Control
                        required
                        type='población'
                        name='Población'
                        placeholder='Introduzca Población'
                        value={poblacion}
                        onChange={(e) => setPoblacion(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='Provincia' className='py-3'>
                    <Form.Label>Provincia*</Form.Label>
                    <Form.Control
                        required
                        type='Introduzca provincia'
                        name='Provincia'
                        placeholder='Provincia'
                        value={provincia}
                        onChange={(e) => setProvincia(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='postalCode' className='py-3'>
                    <Form.Label>Codigo Postal*</Form.Label>
                    <Form.Control
                        required
                        type='postalCode'
                        name='Codigo Postal'
                        placeholder='Introduce codigo postal'
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='phone' className='py-3'>
                    <Form.Label>Teléfono de contacto*</Form.Label>
                    <Form.Control
                        required
                        type='phone'
                        name='Teléfono'
                        placeholder='Introduce Teléfono de contacto'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Dirección de correo electrónico</Form.Label>
                    <Form.Control
                        required
                        type='email'
                        name='Email'
                        placeholder='Introduzca email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='message'>
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                        required
                        type='message'
                        name='Mensaje'
                        placeholder='Introduzca mensaje'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    >

                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'> Envia</Button>

            </Form>

        </FormContainer>
    )
}

export default Contacta