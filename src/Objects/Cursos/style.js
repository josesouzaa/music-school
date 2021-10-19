import styled from "styled-components"

export const Title = styled.h1`
  font-size: 3rem;
  color: #FEFCFD;
  letter-spacing: -1px;
  text-align: center;
`

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media (max-width: 600px){
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
  }
`