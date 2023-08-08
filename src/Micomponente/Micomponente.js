import React from 'react'
import {useState} from 'react'

const Micomponente = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange=(event)=>{
        setInputValue(event.target.value)
    }
    console.log('se renderizo el componente')
  return (
    <div>
        <input type='text' value={inputValue} onChange={handleInputChange}/>
    </div>
  )
}

export default Micomponente