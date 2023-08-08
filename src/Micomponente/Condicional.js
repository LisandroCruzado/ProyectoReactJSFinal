import React, {useState} from 'react'
import Login from './Login';
import Logout from './Logout';

const Condicional = () => {
    const [condicion, setCondicion] = useState(false);
  return (
    <div>
        <h2>Renderizado con ternario</h2>
        <button onClick={()=>setCondicion(!condicion)}>Inicio de Sesion/salir</button>
        <p>{condicion ? <Login/> : <Logout/>}</p>
    </div>
  )
}

export default Condicional