import React from 'react'
import { HeaderBar, HeaderContent, MenuMobileList, BtnMobile } from './style'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
  const [size, setSize] = React.useState(null)
  const [openMenu, setOpenMenu] = React.useState(false)

  React.useEffect(() => {
    function changeSize() {
      const { matches } = window.matchMedia('(max-width: 600px)')
      setSize(matches)
    }
    window.addEventListener('resize', changeSize)
    return () => {
      window.removeEventListener('resize', changeSize)
    }
  }, [])

  React.useEffect(() => {
    const { matches } = window.matchMedia('(max-width: 600px)')
    if (matches) {
      setSize(true)
    }
  }, [])

  return (
    <HeaderBar>
      <HeaderContent className="container">
        <h1>Music School</h1>
        {size === true ? (
          <>
            <BtnMobile
              onClick={() => setOpenMenu(!openMenu)}
            >
              <GiHamburgerMenu />
            </BtnMobile>
            <MenuMobileList
              className={openMenu ? 'open' : ''}
              onClick={() => setOpenMenu(false)}
            >
              <li>
                <button
                  onClick={() => setOpenMenu(!openMenu)}
                >
                  <AiOutlineClose />
                </button>
              </li>
              <li><a href="#cursos">Cursos</a></li>
              <li><a href="#precos">Preços</a></li>
              <li><a href="#vantagens">Vantagens</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
            </MenuMobileList>
          </>
        ) : (
          <ul className="MenuList">
            <li><a href="#cursos">Cursos</a></li>
            <li><a href="#preco">Preços</a></li>
            <li><a href="#vantagens">Vantagens</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
          </ul>
        )}
      </HeaderContent>
    </HeaderBar>
  )
}

export default Header
