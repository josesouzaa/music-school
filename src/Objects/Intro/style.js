import styled from "styled-components";

export const IntroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    height: 50vh;
  }
`

export const IntroObject = styled.div`
  width: 100%;
  height: 90vh;
  background: url('https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80') no-repeat center center;
  background-size: cover;
  filter: brightness(30%);
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: 600px) {
    height: 50vh;
  }
`

export const IntroContent = styled.div`
  position: absolute;
  z-index: 1;
  text-align: center;
  h1 {
    font-size: 3rem;
    color: #FEFCFD;
    letter-spacing: -1px;
    transition: all .3s;
    &:hover{
      text-shadow: 0 0 2px #fefcfd;
    }
  }
  p {
    font-size: 1.2rem;
    color: #FEFCFD;
    margin: 2rem 0 2rem 0;
  }
  button {
    font-size: 1.2rem;
    color: #FEFCFD;
    text-transform: uppercase;
    background: linear-gradient(90deg, #3B3355, #5D5D81);
    cursor: pointer;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    transition: all .6s;
  }
`