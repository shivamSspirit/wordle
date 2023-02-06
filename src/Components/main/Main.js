import React from 'react'
import Header from '../header/Header'
import Board from '../boards/Board'
import Keyboard from '../keyboards/Keyboard'
import GameOver from '../gameover/GameOver'
import { useWordle } from '../../wordleContext'
import './main.css'

function Main() {
    const { gameover,themes } = useWordle()
    return (
        <div className='main-box' id={themes}>
            <Header />
            <Board />
            {gameover?.gameOver ? <GameOver /> : <Keyboard />}
        </div>
    )
}
export default Main
