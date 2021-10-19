import React from 'react'
import styled from 'styled-components'

const Item = styled.h1`
  font-size: ${(props) => props.size === undefined ? '3rem' : props.size};
  color: ${(props) => props.color === undefined ? '#FEFCFD' : props.color};
  letter-spacing: -1px;
  text-align: center;
  margin-bottom: 3rem;
`

const Title = ({ children }) => {
  return (
    <Item>
      {children}
    </Item>
  )
}

export default Title
