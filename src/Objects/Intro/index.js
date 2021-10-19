import React from 'react'
import { IntroObject, IntroContent, IntroWrapper } from './style'

const Intro = () => {
  return (
    <IntroWrapper>
      <IntroObject />
      <IntroContent>
        <h1>Music School</h1>
        <p>Aprenda a tocar diversos instrumentos com apenas uma assinatura!</p>
        <button className="animeup">Matricule-se</button>
      </IntroContent>
    </IntroWrapper>
  )
}

export default Intro
