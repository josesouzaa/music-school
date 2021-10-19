import styled from "styled-components"

export const HeaderBar = styled.header`
  padding: 0.5rem  0;
  width: 100%;
  position: absolute;
  z-index: 100;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: #fefcfd;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -1px;
    transition: all .3s;
    &:hover{
      text-shadow: 0 0 2px #fefcfd;
    }
  }
  ul.MenuList {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    li {
      a {
      color: #fefcfd;
      text-decoration: none;
      font-size: 1rem;
      text-transform: uppercase;
      padding: 0.3rem;
      cursor: pointer;
      border-radius: 0.5rem;
      transition: background .3s;
        &:hover{
          background: #3B3355;
        }
      }
    }
  }
`

export const MenuMobileList = styled.ul`
  display: none;
  &.open {
    position: fixed;
    opacity: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #000505;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    li {
      button {
        background: none;
        border: none;
        cursor: pointer;
        svg {
          fill: #FEFCFD;
          width: 2rem;
          height: 2rem;
          transition: all .3s;
          &:hover {
            fill: #5D5D81;
            transform: scale(120%);
          }
        }
      }
      a {
        color: #FEFCFD;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        transition: all .3s;
        &:hover {
          color: #5D5D81;
          text-decoration: underline;
        }
      }
    }
  }
`

export const BtnMobile = styled.button`
  background: #FEFCFD;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all .3s;
  svg {
    height: 1.5rem;
    width: 1.5rem;
    transform: translateY(2px);
    transition: all .3s;
  }
  &:hover {
    transform: scale(110%);
    background: #3B3355;
    svg {
      fill: #FEFCFD;
    }
  }
`