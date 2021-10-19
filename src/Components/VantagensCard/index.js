import React from 'react'
import styled from 'styled-components'
import { GiMusicalNotes } from 'react-icons/gi'

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  svg {
    width: 60px;
    height: 60px;
    fill: #3B3355;
  }
  h3 {
    font-size: 1.5rem;
    color: #000505;
    line-height: 1.5;
  }
  p {
    color: #000505;
    line-height: 1.5;
  }
`

const VantagensCard = ({ img, alt, title, text }) => {
  return (
    <Item>
      {/* <img src={`/images/${img}`} alt={alt} /> */}
      <GiMusicalNotes />
      <h3>{title}</h3>
      <p>{text}</p>
    </Item>
  )
}

export default VantagensCard
