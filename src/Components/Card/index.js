import React from 'react'
import styled from 'styled-components'
import { FaMusic } from 'react-icons/fa'

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 1px solid #FEFCFD;
  padding: 1.5rem 0.5rem;
  border-radius: 0.5rem;
  svg {
    fill: #5D5D81;
    width: 20%;
    height: auto;
  }
  h2 {
    color: #FEFCFD;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 400;
    span {
      display: block;
      color: currentColor;
      font-weight: bold;
    }
  }
`

const Card = ({ title }) => {
  return (
    <Item className="animeup">
      <FaMusic />
      <h2>Curso de<span>{title}</span></h2>
    </Item>
  )
}

export default Card
