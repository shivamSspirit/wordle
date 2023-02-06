import React, { useCallback, useEffect } from 'react'
import Key from '../key/Key'
import { useWordle } from '../../wordleContext'
import './keyboard.css'

function Keyboard() {
   const { onSelectletter, onSelectdelete, onSelectEnter, disabledletters } = useWordle()

   const line1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
   const line2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
   const line3 = ["Z", "X", "C", "V", "B", "N", "M"]

   const handleKeyboard = useCallback((event) => {
      if (event.key === "Enter") {
         onSelectEnter()
      }
      else if (event.key === "Backspace") {
         onSelectdelete()
      }
      else {
         line1.forEach((key) => {
            if (event.key.toLowerCase() === key.toLowerCase()) {
               onSelectletter(key)
            }
         })
         line2.forEach((key) => {
            if (event.key.toLowerCase() === key.toLowerCase()) {
               onSelectletter(key)
            }
         })
         line3.forEach((key) => {
            if (event.key.toLowerCase() === key.toLowerCase()) {
               onSelectletter(key)
            }
         })
      }
   })

   useEffect(() => {
      document.addEventListener("keydown", handleKeyboard)
      return () => {
         document.removeEventListener("keydown", handleKeyboard)
      }
   }, [handleKeyboard])

   return (
      <div className='keyboard' onKeyDown={handleKeyboard}>
         <div className='line'>
            {line1.map((keys, id) => (
               <Key disabled={disabledletters.includes(keys)} key={id} keys={keys} />
            ))}
         </div>
         <div className='line'>
            {line2.map((keys, id) => (
               <Key disabled={disabledletters.includes(keys)} key={id} keys={keys} />
            ))}
         </div>
         <div className='line'>
            <Key keys={"Enter"} bigkey={true} />
            {line3.map((keys, id) => (
               <Key disabled={disabledletters.includes(keys)} key={id} keys={keys} />
            ))}
            <Key keys={"Delete"} bigkey={true} />
         </div>
      </div>
   )
}

export default Keyboard
