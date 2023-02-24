import React from 'react'
import './styles/Footer.css'
import icono from '../img/icono.png'

const Footer = () => {
    return (
        <div className='box'>

            <div className='whats_icon'>
                <input type="checkbox" id='btn-mas' />
                <div className='btn-mas'>
                    <label htmlFor="btn-mas" className='bi bi-x-circle-fill'></label>
                </div>
                <div className='container-redes'>
                    <p>
                        <a href="https://api.whatsapp.com/send?phone=+34653745960" target="_blank">
                            <img className="boton" src={icono} alt="" />
                        </a>
                    </p>
                </div>
            </div>

            <footer>
                <div className='row'>
                    <div className="col-sm-6">
                        <p>
                            <a href="https://www.facebook.com/people/Neolog-Sant-boi/pfbid02miQg4qgqrSouziQ4x8UxadbXtJ4bcxKjB4Jg7YApUB2PukvA4QeqJFoXqiZmWitMl/" target="_blank">
                                <i className="bi bi-facebook"></i>
                                Facebook
                            </a>
                        </p>
                    </div>
                    <div className="col-sm-6 social">
                        <p>
                            <a href="https://www.instagram.com/new_neolog/" target="_blank">
                                <i className="bi bi-instagram"></i>
                                Instagram
                            </a> &middot;
                        </p>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-sm-6 social">
                        <p>
                            <a href="tel:+34653745960">
                                <i className="bi bi-whatsapp"></i>
                                WhatsApp: 653 74 59 60
                            </a>
                        </p>
                    </div>
                    <div className="col-sm-6 social">
                        <p>
                            <a href="mailto:agencia737.gerencia@gls-spain.es">
                                <i className="bi bi-envelope"></i>
                                Correo (agencia737.gerencia@gls-spain.es)
                            </a>
                        </p>
                    </div>
                </div>

                <br></br>
                <div className='row'>
                    <div className="col-sm-6">
                        &copy; 2023–2024 Neolog Agencia Gls en Sant Boi de Llobregat &middot;
                    </div>
                    <div className='col-sm-6'>
                        <p>
                            <a href="#">
                                <i className='bi bi-arrow-up-circle-fill'>
                                </i>

                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer