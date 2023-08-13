import React from 'react'
import camionsito from '../../assets/images/camion.png'
import medallita from '../../assets/images/medalla.png'
import securityfirst from '../../assets/images/seguro.png'
import "./BannerEnvios.css";

const BannerEnvios = () => {
  return (
    <div className='container' id='bar'>
        <div>
            <img src={medallita} alt='Medalla que representa nuestra calidad'></img>
            <p>Calidad <span>asegurada</span>.</p>
        </div>
        <div>
            <img src={camionsito} alt='Imagen que representa envios a todo el país'></img>
            <p><span>Envío Gratis</span> en Compras mayores a $30.000.</p>
        </div>
        <div>
            <img src={securityfirst} alt='Seguridad para nuestros clientes'></img>
            <p>Entregas 100% <span>garantizadas</span>.</p>
        </div>
    </div>
  )
}

export default BannerEnvios