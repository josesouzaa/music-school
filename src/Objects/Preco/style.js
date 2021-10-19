import styled from "styled-components";

export const PrecoBackground = styled.section`
  background: #5D5D81;
  .container {
    h2 {
      font-size: 1.5rem;
      color: #FEFCFD;
      text-align: center;
      margin: 3rem 0 5rem 0;
    }
    > p {
      color: #FEFCFD;
      text-align: center;
      margin: 3rem 0;
      line-height: 1.5;
      span {
        color: #FEFCFD;
        font-weight: bold;
      }
    }
  }
`

export const PrecosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  @media (max-width: 600px){
    grid-template-columns: 280px;
    > div:nth-child(2){
    grid-row: 1 / 2;
    }
  }
`