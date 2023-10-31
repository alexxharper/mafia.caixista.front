import '../../styles/HeaderComponent.css'
import React from 'react'
import { Icon } from '@iconify/react'

export default function Header() {
  const navItems = [
    'Inicio',
    'Notícias',
    'Gamepass',
    'Outros',
    'Sobre nós'
  ]
  return (
    <>
      <header className='headerComponent'>
        <div className="headerInnerComponent">

          <div className="logoContainer">
            <div className="logoContent">
              <img className="logoContentImage" src="#" alt="LogoDesk" />
            </div>
          </div>
          <div className="searchBoxContainer">
            <div className="searchBoxBg">
              <div className="searchBoxContent">
                <input className="InputContainer" type="text" placeholder="Faça sua pesquisa" />
                <button className="SearchButton">
                  <Icon icon="octicon:search" style={{ fontSize: '32px', color: '#11D800' }} />
                </button>
              </div>
            </div>
          </div>
          <div className="navMenuContainer">
            <nav className="navMenuContent">
              {navItems.map(item => item && (
                <span className="navMenuItem">{item}</span>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
