import styled from "styled-components";

export const VantagensBackground = styled.section`
  background: rgb(254,252,253);
  background: linear-gradient(0deg, rgba(254,252,253,1) 0%, rgba(191,205,224,1) 60%, rgba(93,93,129,1) 100%);
  padding-bottom: 5rem;
  > div > h2 {
    font-size: 2rem;
    color: #000505;
    text-align: center;
    padding: 5rem 0;
  }
`

export const VantagensWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  text-align: center;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`