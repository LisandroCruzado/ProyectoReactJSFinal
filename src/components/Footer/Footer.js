import React from 'react'
import logo from '../../assets/images/logo-wide (768 × 500 px).png'
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <Container className=''>
      <div className='main-footer'>
        <div className='container'>
          <div className='row'>
            {/* {Columna1} */}
            <div className='col-md-3 col-sm-6'>
              <img src={logo} alt='Logo Firstsense' />
            </div>
            {/* {Columna2} */}
            <div className='col-md-3 col-sm-6'>
            <h4>Firstsense</h4>
              <ul className='list-unstyled'>
                <li>25 de Mayo 431, Paraná Entre Rios.</li>
                <li>343 - 4314848</li>
                <li>soporte@firstsense.com</li>
              </ul>
            </div>
            {/* {Columna3} */}
            <div className='col-md-3 col-sm-6'>
              <ul className='list-unstyled'>
                <li>Quienes somos</li>
                <li>Sucursales</li>
                <li>Trabajá con nosotros</li>
                <li>Políticas de privacidad</li>
              </ul>
            </div>
            {/* {Columna4} */}
            <div className='col-md-3 col-sm-6'>
              <ul className='list-unstyled'>
                <li>Fragancias</li>
                <li>Tratamientos</li>
                <li>Maquillaje</li>
              </ul>
            </div>
            {/* Footer Bottom */}
            <div className="footer-bottom">
              <p className='text-xs-center'>
              Copyright © 2023 derechos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Footer