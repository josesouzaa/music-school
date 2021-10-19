import React from 'react'
import { AplicativoBackground, AplicativoWrapper } from './style'
import { AiFillApple, AiFillAndroid } from 'react-icons/ai'

const Aplicativo = () => {
  return (
    <AplicativoBackground id="aplivativo">
      <div className="container">
        <AplicativoWrapper>
          <img src="./images/iphone.png" alt="iphone" />
          <div>
            <h3>Estude em qualquer lugar com a App</h3>
            <p>Com o aplicativo da MusicDot você baixa as aulas para estudar offline e fazer os exercícios. Disponível para Android e iOS. Já é aluno? Baixe já:</p>
            <div>
              <button className="animeup"><AiFillAndroid />Android</button>
              <button className="animeup"><AiFillApple />IOS</button>
            </div>
          </div>
        </AplicativoWrapper>
      </div>
    </AplicativoBackground>
  )
}

export default Aplicativo
