import { useState } from 'react'
import Spiner from './Spiner'

const Loader = () => {
  const[load, setLoad] = useState(false);
  const changeLoad = ()=>{
    setLoad(true);
    setTimeout(()=>{
      setLoad(false);
    }, 3000)
  }


  return (
    <div>
      {load ? <Spiner/> : <div>
                            <button className='btn btn-success' onClick={()=>changeLoad()}>Cargar pagina</button>
                          </div>}
    </div>
  )
}

export default Loader