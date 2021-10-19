import React from 'react'
import { CardsWrapper } from './style'
import Title from '../../Components/Title/index'
import Card from '../../Components/Card/index'

const Cursos = () => {
  return (
    <section className="container section" id="cursos">
      <Title>Cursos</Title>
      <CardsWrapper>
        <Card
          title="Teclado e Piano"
        />
        <Card
          title="Violão e Guitarra"
        />
        <Card
          title="Canto"
        />
        <Card
          title="Baixo"
        />
        <Card
          title="Bateria"
        />
        <Card
          title="Sopro"
        />
      </CardsWrapper>
    </section>
  )
}

export default Cursos
