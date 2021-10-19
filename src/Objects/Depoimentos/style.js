import styled from "styled-components";

export const DepoimentosBackground = styled.section`
  background: #FEFCFD;
  > div {
    padding: 1rem 0 2rem  0;
      > h2 {
      font-size: 2rem;
      color: #000505;
      text-align: center;
      padding: 3rem 0;
    }
  } 
`

export const SlideContainer = styled.div`
  width: min(90vw, 600px);
  margin: 0 auto;
  overflow: hidden;
`

export const SlydesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100%);
  transition: transform .6s;
`

export const ButtonsWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
