import React from 'react'
import { useWordle } from '../../wordleContext'
import './header.css'

function Header() {
  const {toggleTheme,themes} = useWordle()
  return (
    <div className='header-container'>
      <div className='header-box'>
        <p className='head-title'>Wordle</p>
        <span className='mode-icon'>
          {themes==='dark'?<img onClick={()=>toggleTheme()} className='mode' src='/sun.png' alt='mode-icon' /> : <img onClick={()=>toggleTheme()} className='mode' src='/moon.png' alt='mode-icon' />}
        </span>
      </div>
    </div>
  )
}

export default Header
