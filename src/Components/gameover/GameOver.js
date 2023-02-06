import React from 'react'
import { useWordle } from '../../wordleContext'
import './gameover.css'

function GameOver() {
  const { gameover, correctWord, currAttempt } = useWordle();
  return (
    <div className='gameover'>
      <h3>{gameover.guessedWord ? "you Correctly guessed" : "you failed"}</h3>
      <h3>Correct: {correctWord}</h3>
      {gameover.guessedWord && (
        <h3>you guessed in {currAttempt.attempt} attempts</h3>
      )}
    </div>
  )
}
export default GameOver
