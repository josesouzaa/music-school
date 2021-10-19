import styled from "styled-components";

export const FooterBackground = styled.footer`
  background: #FEFCFD;
  border-top: 1px solid #3B3355;
  > div {
    padding: 4rem 0;
    border-top: 3px solid #3B3355;
  }
`

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 600px){
    grid-template-columns: 90vw;
    gap: 2rem;
  }
  > div:nth-child(1){
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2 {
      color: #3B3355;
      font-size: 1.5rem;
      letter-spacing: -1px;
    }
    > div {
      display: flex;
      gap: 1rem;
      > a svg {
        fill: #3B3355;
        height: 2rem;
        width: 2rem;
      }
    }
  }
  > div:nth-child(2){
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2 {
      text-transform: uppercase;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      li a {
        text-decoration: none;
        transition: all .5s;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  > div:nth-child(3){
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2 {
      text-transform: uppercase;
    }
    > div {
      display: flex;
      height: 40px;
      input {
        width: 80%;
        border: 2px solid #3B3355;
        border-radius: 0.2rem 0 0 0.2rem;
        &:focus-visible{
          outline: none;
        }
      }
      button {
        width: 20%;
        border: 2px solid #3B3355;
        background: #3B3355;
        color: #FEFCFD;
        font-weight: bold;
        border-radius: 0 0.2rem 0.2rem 0;
        cursor: pointer;
        transition: all .3s;
        &:hover {
          filter: brightness(1.3);
        }
      }
    }
  }
`