import React from 'react';
import Caixa from './Caixa';
import planet from '../imagens/planet.png';
import settings from '../imagens/settings.png';
import star from '../imagens/star.png';
import house from '../imagens/house.png';


import './Container.scss'

const Container = () => {
    return (
        <div className="Container">
            <Caixa titulo="editable Theme" imagem={settings} />
            <Caixa titulo="Flat Desing" imagem={star} />
            <Caixa titulo="Reach your audience" imagem={planet} />
            <Caixa titulo="Compre sua casa própria" imagem={house} />
        </div>
    )
}

export default Container;