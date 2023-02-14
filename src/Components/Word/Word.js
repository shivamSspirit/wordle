import React, { useEffect } from 'react'
import { useWordle } from '../../wordleContext';
import './word.css'

function Word({ letterposition, attemptval }) {
  const { board, correctWord, currAttempt, setDisablesLetters } = useWordle();

  const letter = board[attemptval][letterposition]
  const correct = correctWord.toUpperCase()[letterposition] === letter;
  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  const letterState = currAttempt.attempt > attemptval && (correct ? "correct" : almost ? "almost" : "error");
  console.log("letter state",letterState)

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisablesLetters((prev) => [...prev, letter])
    }
  }, [currAttempt.attempt])

  return (
    <div className='letter' id={letterState}>
      {" "}
      {letter}
    </div>
  )
}

export default Word
