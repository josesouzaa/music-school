import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
  background-color: #3B3355;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%235D5D81'/%3E%3Cstop offset='1' stop-color='%233B3355'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23BFCDE0' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23BFCDE0' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.11'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: local;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem 1rem 1rem 1rem;
  border-radius: 0.5rem;
  &.plus:before{
    content: '+ Assinado';
    position: absolute;
    top: -32px;
    background: #FEFCFD;
    padding: 0.5rem 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    border-radius: 0.3rem 0.3rem 0 0;
  }
  p, span {
    color: #FEFCFD;
  }
  p:nth-child(1){
    font-size: 2rem;
  }
  p:nth-child(2){
    font-size: 1.5rem;
    span{
      font-size: 2rem;
      font-weight: bold;
    }
  }
  p:nth-child(3){
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, .5);
  }
  button {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: #FEFCFD;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    margin: 1rem 0;
    cursor: pointer;
    font-weight: bold;
    color: #5D5D81;
  }
`

const Precos = ({ plano, parcelas, valor, total }) => {
  return (
    <Item className={plano === "Anual" ? "plus" : ""}>
      <p>Plano {plano}</p>
      <p>{parcelas}x <span>R${valor}</span></p>
      <p>Valor total de R$ {total}</p>
      <button className="animeup">Matricule-se</button>
    </Item>
  )
}

export default Precos
