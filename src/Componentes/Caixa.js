import React from "react";

import "./Caixa.scss";

const Caixa = ({ titulo, imagem }) => {
    return (
        <div>
            <div className="Caixa">
                <img src={imagem} alt="" />
            </div>
            <h1>{titulo}</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Ataque labore, odit ad vel perferendis{" "}
            </p>
        </div>
    );
};

export default Caixa;