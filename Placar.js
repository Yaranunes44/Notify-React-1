import React, { useState } from "react";
import './Placar.scss';

const Placar = ({ time }) => {
    const [votos, setVotos] = useState(0);
    
    const incrementar = () => {
       setVotos(votos + 1);
     
    }

    const decrementar = () => {
        if (votos > 0) {
            setVotos(votos)
        }
    }
    return (
        <div className="Placar">
            <h1>{time}</h1>
            <h3>{votos}</h3>
        </div>
        <button>-</button>
        <button>+</button>
        <div>
     </div>
    )
}

 export default Placar;