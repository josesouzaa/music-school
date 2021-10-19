import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.4rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  h3 {
    text-transform: uppercase;
    color: #3B3355;
  }
  p {
    line-height: 1.5;
  }
`

export const Comment = ({ autor, comentario, index }) => {
  return (
    <Item>
      <h3>{autor}</h3>
      <p>{comentario}</p>
    </Item>
  )
}

const Button = styled.button`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  border: none;
  background: #5D5D81;
  cursor: pointer;
  transition: all .5s;
  &.ativo {
    transform: scale(120%);
    background: #3B3355;
  }
`

export const ButtonSlide = ({ slideativo, index, setDepoimento }) => {

  return (
    <Button className={slideativo === index ? 'ativo' : ''} onClick={() => setDepoimento(index)} />
  )
}
