import styled from "styled-components";

export const AplicativoBackground = styled.section`
  background: #FEFCFD;
  border-top: 1px solid #3B3355;
  > div.container {
    padding: 2rem 0 1rem  0;
    border-top: 3px solid #3B3355;
  }
`

export const AplicativoWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 300px;
  grid-template-rows: 300px;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  @media (max-width: 600px) {
    grid-template-columns: 280px;
  }
  img {
    height: 100%;
    @media (max-width: 600px){
      display: none;
    }
  }
  > div {
    h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    @media (max-width: 600px){
      font-size: 1.8rem;
    }
    }
    p {
      line-height: 1.5;
      margin-bottom: 1rem;
    }
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.3rem;
        background: #5D5D81;
        border: none;
        color: #FEFCFD;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 2px;
        width: 100%;
        height: 40px;
        border-radius: 0.5rem;
        cursor: pointer;
        > svg {
          fill: #FEFCFD;
          width: 1.3rem;
          height: 1.3rem;
        }
      }
    }
  }
  
`