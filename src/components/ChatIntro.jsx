import React from 'react'
import './ChatIntro.css'

import fundoImg from '../images/fundo.jpg'

export default () => {
    return (
        <div className="chatIntro">
            <img src={fundoImg} alt="imagem fundo" />
            <h1>Mantenha seu celular conectado.</h1>
            <h2>
                O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.<br/>
                Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
            </h2>
        </div>
    )
}