import React from 'react'
import { useWordle } from '../../wordleContext'
import './key.css'

function Key({ keys, bigkey, disabled }) {
  const { onSelectEnter, onSelectdelete, onSelectletter } = useWordle()

  const selectLetter = () => {
    if (keys === "Enter") {
      onSelectEnter()
    }
    else if (keys === "Delete") {
      onSelectdelete()
    }
    else {
      onSelectletter(keys)
    }
  }

  return (
    <div className='key' id={`${bigkey ? "big" : disabled && "disabled"}`} onClick={selectLetter}>
      {keys}
    </div>
  )
}

export default Key
