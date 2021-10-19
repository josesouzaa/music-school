import React from 'react'
import { DepoimentosBackground, SlideContainer, SlydesWrapper, ButtonsWrapper } from './style'
import { Comment, ButtonSlide } from '../../Components/Comment'

const comments = [
  {
    autor: 'Paula Domingues',
    comentario: 'Intercalei com o curso de teoria o que facilitou bastante o meu desenvolvimento deste modulo!'
  },
  {
    autor: 'Diogo Batista',
    comentario: 'Muitas dúvidas que eu tinha a respeito de campo harmônico foram esclarecidas e com as fórmulas ficou bem mais prático como montar e utilizar as escalas!!'
  },
  {
    autor: 'José de Souza',
    comentario: 'A forma como foi desenvolvido o conteúdo deste modulo ficou bem, facilitou muito a forma de aprendizagem dos intervalos, estou muito feliz com o resultado do curso.'
  },
]

const Depoimentos = () => {
  const [depoimento, setDepoimento] = React.useState(1)

  return (
    <DepoimentosBackground id="depoimentos">
      <div className="container">
        <h2>O que os alunos dizem</h2>
        <SlideContainer>
          <SlydesWrapper style={{ transform: `translateX(-${depoimento * 100}%)` }}>
            {comments.map((item, index) => (
              <Comment
                key={index}
                autor={item.autor}
                comentario={item.comentario}
              />
            ))}
          </SlydesWrapper>
          <ButtonsWrapper>
            {comments.map((item, index) => (
              <ButtonSlide
                key={index}
                slideativo={depoimento}
                index={index}
                setDepoimento={setDepoimento}
              />
            ))}
          </ButtonsWrapper>
        </SlideContainer>
      </div>
    </DepoimentosBackground>
  )
}

export default Depoimentos
