import React from 'react'
import VantagensCard from '../../Components/VantagensCard'
import { VantagensBackground, VantagensWrapper } from './style'

const Vantagens = () => {
  const vantagens = [
    {
      id: 1,
      img: 'diamond.svg',
      title: 'Tudo para você realmente aprender',
      text: 'Você acessa todo o conteúdo! São aulas, exercícios, playbacks, cifras, partituras e tira dúvidas. Estude em qualquer lugar, qualquer dia, qualquer horário, ilimitado. Matricule-se já'
    },
    {
      id: 2,
      img: 'diamond.svg',
      title: 'Nenhuma dúvida sem resposta',
      text: 'Dúvidas são importantes para o seu aprendizado, e as dificuldades são normais. Na MusicDot você estuda com todo o suporte necessário. Além de todo conteúdo, você tira dúvidas'
    },
    {
      id: 3,
      img: 'diamond.svg',
      title: 'Didática cuidadosa que te faz aprender',
      text: 'Saber tocar não quer dizer saber ensinar. Nosso orgulho é justo o extremo cuidado didático que temos com as aulas. Investimos muito tempo, do iniciante ao avançado.'
    },
    {
      id: 4,
      img: 'diamond.svg',
      title: 'Estudar música online é a melhor opção',
      text: 'Aprender em DVD e revistinha de banca são coisas do passado! Estudar com um professor particular é bom, mas quem é o seu professor? A MusicDot te oferece a melhor aula, a qualquer hora'
    }
  ]

  return (
    <VantagensBackground id="vantagens">
      <div className="container">
        <h2>Por que fazer aulas na MusicDot?</h2>
        <VantagensWrapper>
          {vantagens.map(item => (
            <VantagensCard
              key={item.id}
              img={item.img}
              title={item.title}
              text={item.text}
            />
          ))}
        </VantagensWrapper>
      </div>
    </VantagensBackground>
  )
}

export default Vantagens
